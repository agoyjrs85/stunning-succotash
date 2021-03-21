# README

## Top-level Schemas

-   [Actor](./actor.md "Actors are humans or non-humans that perform actions") – `https://platform.codeclimate.com/schemas/actor`
-   [Application](./application.md "A software program or group of programs delivered to an end user, defined by a set of Components") – `https://platform.codeclimate.com/schemas/application`
-   [Board](./board.md "Boards depict issues moving across Statuses") – `https://platform.codeclimate.com/schemas/board`
-   [Branch](./branch.md "Named reference within Repository") – `https://platform.codeclimate.com/schemas/branch`
-   [Calendar](./calendar.md "Calendars are groups of CalendarEvents") – `https://platform.codeclimate.com/schemas/calendar`
-   [CalendarEvent](./calendarevent.md "CalendarEvent is an event in a Calendar") – `https://platform.codeclimate.com/schemas/calendar-event`
-   [CodeIssue](./codeissue.md "TODO: change types for a bunch of these") – `https://platform.codeclimate.com/schemas/code-issue`
-   [Commit](./commit.md "A commit") – `https://platform.codeclimate.com/schemas/commit`
-   [CommitCheck](./commitcheck.md "A status rendered on a Commit e") – `https://platform.codeclimate.com/schemas/commit-check`
-   [Component](./component.md "Components are conceptual units of software, defined as a set of source files, which are composed into Applications") – `https://platform.codeclimate.com/schemas/component`
-   [CoverageTotals](./coveragetotals.md "Information about test coverage of a commit") – `https://platform.codeclimate.com/schemas/coverage-totals`
-   [DeliveryBuild](./deliverybuild.md "A Build run within a CI system") – `https://platform.codeclimate.com/schemas/delivery-build`
-   [DeliveryJob](./deliveryjob.md "A Job that ran as part of a Build") – `https://platform.codeclimate.com/schemas/delivery-job`
-   [DeliveryWorkflow](./deliveryworkflow.md "A configuration for running a Build within a CI system") – `https://platform.codeclimate.com/schemas/delivery-workflow`
-   [DependencyIssue](./dependencyissue.md "An issue with a dependency, such as a security vulnerability or a licensing issue") – `https://platform.codeclimate.com/schemas/dependency-issue`
-   [Deployment](./deployment.md "Deployments push changes to a runtime Evironment") – `https://platform.codeclimate.com/schemas/deployment`
-   [Environment](./environment.md "Represents a running instance of an Application, like production or staging") – `https://platform.codeclimate.com/schemas/environment`
-   [FeatureFlag](./featureflag.md "FeatureFlags allow changes to be gradually rolled out to an Environment after a Deployment") – `https://platform.codeclimate.com/schemas/feature-flag`
-   [FileCoverage](./filecoverage.md "Information about test coverage of a file within a commit") – `https://platform.codeclimate.com/schemas/file-coverage`
-   [Group](./group.md "A group of actors") – `https://platform.codeclimate.com/schemas/group`
-   [Incident](./incident.md "Incidents are a normalized, de-duplicated event") – `https://platform.codeclimate.com/schemas/incident`
-   [IncidentNotification](./incidentnotification.md "IncidentNotifications are a 'page' results from an incident being triggered or escalated") – `https://platform.codeclimate.com/schemas/incident-notification`
-   [Issue](./issue.md "TODO: description for issues") – `https://platform.codeclimate.com/schemas/issue`
-   [IssueChangelog](./issuechangelog.md "Changes between Issues") – `https://platform.codeclimate.com/schemas/issue-changelog`
-   [IssueComment](./issuecomment.md "A comment left on an Issue") – `https://platform.codeclimate.com/schemas/issue-comment`
-   [IssuePriority](./issuepriority.md "A comment left on an Issue") – `https://platform.codeclimate.com/schemas/issue-priority`
-   [Metric](./metric.md "A series of values relating to an object") – `https://platform.codeclimate.com/schemas/metric`
-   [MetricMeasure](./metricmeasure.md "A Metric value as of a point in time") – `https://platform.codeclimate.com/schemas/metric-measure`
-   [OnCall](./oncall.md "OnCalls are a contiguous unit of time for which a user will be on call") – `https://platform.codeclimate.com/schemas/on-call`
-   [Package](./package.md "TODO: is that what this is? The connector package") – `https://platform.codeclimate.com/schemas/package`
-   [PackageDependency](./packagedependency.md "TODO: is that what this is? The connector PackageDependency") – `https://platform.codeclimate.com/schemas/package-dependency`
-   [Project](./project.md "Projects consist of a set of Issues") – `https://platform.codeclimate.com/schemas/project`
-   [PullRequest](./pullrequest.md "A Pull Request consists of a set of commits") – `https://platform.codeclimate.com/schemas/pull-request`
-   [PullRequestComment](./pullrequestcomment.md "A Pull Request Event is an event that's related to a Pull Request") – `https://platform.codeclimate.com/schemas/pull-request-comment`
-   [PullRequestEvent](./pullrequestevent.md "A Pull Request Event is an event that's related to a Pull Request") – `https://platform.codeclimate.com/schemas/pull-request-event`
-   [Release](./release.md "Releases make a Package available in a ReleaseStage") – `https://platform.codeclimate.com/schemas/release`
-   [ReleaseStage](./releasestage.md "ReleaseStages are destinations that Packages can be Released to e") – `https://platform.codeclimate.com/schemas/release-stage`
-   [Repository](./repository.md "A code repository") – `https://platform.codeclimate.com/schemas/repository`
-   [ReviewRequest](./reviewrequest.md "A request for review of a PullRequest") – `https://platform.codeclimate.com/schemas/review-request`
-   [Stream](./stream.md "Streams are data sources that can be subscribed to") – `https://platform.codeclimate.com/schemas/stream`
-   [TestResult](./testresult.md "The result of a test from a Build") – `https://platform.codeclimate.com/schemas/test-result`
-   [TestResultTotals](./testresulttotals.md "The result of a test from a Build") – `https://platform.codeclimate.com/schemas/test-result-totals`

## Other Schemas

### Objects

-   [DeliveryWorkflow](./deliverybuild-properties-workflow-oneof-deliveryworkflow.md "A configuration for running a Build within a CI system") – `https://platform.codeclimate.com/schemas/delivery-workflow#/properties/workflow/oneOf/1`
-   [Environment](./deployment-properties-environment-oneof-environment.md "Represents a running instance of an Application, like production or staging") – `https://platform.codeclimate.com/schemas/environment#/properties/environment/oneOf/0`
-   [Project](./issuepriority-properties-project-oneof-project.md "Projects consist of a set of Issues") – `https://platform.codeclimate.com/schemas/project#/properties/project/oneOf/0`
-   [Repository](./branch-properties-repository-oneof-repository.md "A code repository") – `https://platform.codeclimate.com/schemas/repository#/properties/repository/oneOf/0`
-   [Untitled object in CalendarEvent](./calendarevent-properties-start.md "Start of the CalendarEvent") – `https://platform.codeclimate.com/schemas/calendar-event#/properties/start`
-   [Untitled object in CalendarEvent](./calendarevent-properties-end.md "End of the CalendarEvent") – `https://platform.codeclimate.com/schemas/calendar-event#/properties/end`
-   [Untitled object in CodeIssue](./codeissue-properties-location.md "Location of the CodeIssue") – `https://platform.codeclimate.com/schemas/code-issue#/properties/location`
-   [Untitled object in Commit](./commit-properties-statistics.md "Commit statistics") – `https://platform.codeclimate.com/schemas/commit#/properties/statistics`
-   [Untitled object in OnCall](./oncall-properties-schedule.md "OnCall schedule") – `https://platform.codeclimate.com/schemas/on-call#/properties/schedule`
-   [Untitled object in OnCall](./oncall-properties-escalationpolicy.md "Escalation Policy for OnCall") – `https://platform.codeclimate.com/schemas/on-call#/properties/escalationPolicy`
-   [Untitled object in PullRequest](./pullrequest-properties-statistics.md "PullRequest statistics") – `https://platform.codeclimate.com/schemas/pull-request#/properties/statistics`
-   [Untitled object in Repository](./repository-properties-owner.md "The owning entity of the repository - usually an organization or a user") – `https://platform.codeclimate.com/schemas/repository#/properties/owner`
-   [Untitled object in Repository](./repository-properties-owner.md "The owning entity of the repository - usually an organization or a user") – `https://platform.codeclimate.com/schemas/repository#/properties/owner`
-   [Untitled object in ReviewRequest](./reviewrequest-properties-actors-items.md "The self URI of the Actor this test commit to, or a nested Actor record") – `https://platform.codeclimate.com/schemas/review-request#/properties/actors/items`
-   [Untitled object in ReviewRequest](./reviewrequest-properties-actorgroups-items.md "The self URI of the Actor Group this test commit to, or a nested Actor Group record") – `https://platform.codeclimate.com/schemas/review-request#/properties/actorGroups/items`

### Arrays

-   [Untitled array in CalendarEvent](./calendarevent-properties-attendees.md "Attendees") – `https://platform.codeclimate.com/schemas/calendar-event#/properties/attendees`
-   [Untitled array in CodeIssue](./codeissue-properties-categories.md "CodeIssue categories") – `https://platform.codeclimate.com/schemas/code-issue#/properties/categories`
-   [Untitled array in Commit](./commit-properties-parents.md "The canonical URI for this record") – `https://platform.codeclimate.com/schemas/commit#/properties/parents`
-   [Untitled array in Deployment](./deployment-properties-packages.md "TODO: Packages") – `https://platform.codeclimate.com/schemas/deployment#/properties/packages`
-   [Untitled array in FileCoverage](./filecoverage-properties-linehits.md "The number of hits on each line in the file, starting with line 1") – `https://platform.codeclimate.com/schemas/file-coverage#/properties/lineHits`
-   [Untitled array in Group](./group-properties-members.md "URLs of actors") – `https://platform.codeclimate.com/schemas/group#/properties/members`
-   [Untitled array in Repository](./repository-properties-languages.md "Languages used in this array") – `https://platform.codeclimate.com/schemas/repository#/properties/languages`
-   [Untitled array in Repository](./repository-properties-languages.md "Languages used in this array") – `https://platform.codeclimate.com/schemas/repository#/properties/languages`
-   [Untitled array in ReviewRequest](./reviewrequest-properties-actors.md "Actors") – `https://platform.codeclimate.com/schemas/review-request#/properties/actors`
-   [Untitled array in ReviewRequest](./reviewrequest-properties-actorgroups.md "Actor Groups") – `https://platform.codeclimate.com/schemas/review-request#/properties/actorGroups`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `http://json-schema.org/draft-07/schema#`
