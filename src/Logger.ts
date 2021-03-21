export enum LoggerLevel {
  ERROR = "ERROR",
  WARN = "WARN",
  INFO = "INFO",
  DEBUG = "DEBUG"
}

export interface LoggerConfig {
  level?: LoggerLevel,
  tags?: string[],
}

interface LoggerIO {
  write: (string) => void
}

const loggerLevelOrder = [
  LoggerLevel.ERROR,
  LoggerLevel.WARN,
  LoggerLevel.INFO,
  LoggerLevel.DEBUG,
]

export class Logger {
  protected io: LoggerIO
  protected config: LoggerConfig

  constructor(io: LoggerIO, config?: LoggerConfig) {
    this.io = io
    this.config = config || {}
  }

  get level(): LoggerLevel {
    return this.config.level || LoggerLevel.INFO
  }

  get tags(): string[] {
    return this.config.tags || []
  }

  taggedChild(additionalTags: string[]): Logger {
    return new Logger(
      this.io,
      {
        level: this.level,
        tags: this.tags.concat(additionalTags),
      },
    )
  }

  error = this.buildWriter(LoggerLevel.ERROR)
  warn = this.buildWriter(LoggerLevel.WARN)
  info = this.buildWriter(LoggerLevel.INFO)
  debug = this.buildWriter(LoggerLevel.DEBUG)

  private buildWriter(msgLevel: LoggerLevel): (string) => void {
    return (message: string) => {
      if (loggerLevelOrder.indexOf(this.level) >= loggerLevelOrder.indexOf(msgLevel)) {
        this.io.write(this.formatMessage(message))
      }
    }
  }

  private formatMessage(message: string) {
    if (this.tags.length > 0) {
      const tagsStr = this.tags.map((t) => `[${t}]`).join(" ")
      return `${tagsStr} ${message}\n`
    } else {
      return `${message}\n`
    }
  }
}
