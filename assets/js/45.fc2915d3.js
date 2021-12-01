(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{345:function(t,e,a){t.exports=a.p+"assets/img/pipelines.0565036c.svg"},352:function(t,e,a){t.exports=a.p+"assets/img/pr-build-validation.e0c6fcce.png"},662:function(t,e,a){t.exports=a.p+"assets/img/scm-contacts-ci.3fecf209.png"},663:function(t,e,a){t.exports=a.p+"assets/img/scm-contacts-api-arch.f78095ad.png"},891:function(t,e,a){"use strict";a.r(e);var s=a(32),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"challenge-4-work-with-azure-pipelines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#challenge-4-work-with-azure-pipelines"}},[t._v("#")]),t._v(" Challenge 4: Work with Azure Pipelines")]),t._v(" "),s("p",[s("img",{attrs:{src:a(345),alt:"Azure Pipelines"}})]),t._v(" "),s("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[t._v("#")]),t._v(" Here is what you will learn 🎯")]),t._v(" "),s("ul",[s("li",[t._v("Create a CI build to create SCM Contacts API's deployment artifacts")]),t._v(" "),s("li",[t._v("Create a "),s("em",[t._v("Pull Request")]),t._v(" validation build, that is triggered to validate a "),s("em",[t._v("Pull Request")])]),t._v(" "),s("li",[t._v("Create a CD Build to deploy SCM Contacts API to the stages "),s("em",[t._v("Development")]),t._v(" and "),s("em",[t._v("Testing")])])]),t._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#create-the-ci-build"}},[t._v("Create the CI Build")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#create-the-pull-request-validation-build"}},[t._v("Create the Pull Request Validation Build")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#create-the-cd-build"}},[t._v("Create the CD Build")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#create-a-pull-request"}},[t._v("Create a Pull Request")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#trigger-the-pr-build-to-validate-a-pull-request"}},[t._v("Trigger the PR-Build to validate a Pull Request")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#see-the-build-flow-in-action"}},[t._v("See the Build Flow in Action")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#wrap-up"}},[t._v("Wrap-Up")])])]),t._v(" "),s("h2",{attrs:{id:"create-the-ci-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-ci-build"}},[t._v("#")]),t._v(" Create the CI Build")]),t._v(" "),s("p",[t._v("Go to Azure Boards and set the User Story S4 and S5 to "),s("em",[t._v("active")]),t._v(". We create a new build definition with the steps as follows:")]),t._v(" "),s("ul",[s("li",[t._v("Build the SCM Contacts API")]),t._v(" "),s("li",[t._v("Copy the ARM Template to the artifact location")]),t._v(" "),s("li",[t._v("Publish the artifacts")])]),t._v(" "),s("ol",[s("li",[t._v("Create a feature branch "),s("em",[t._v('"features/scmcontactscicd"')]),t._v(" and check it out")]),t._v(" "),s("li",[t._v("Add a file named "),s("code",[t._v("scm-contacts-ci.yaml")]),t._v(" in the directory "),s("code",[t._v("day4/apps/pipelines")])]),t._v(" "),s("li",[t._v("Add the following yaml snippet that defines the build Trigger:")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trigger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" day4/apps/infrastructure/templates/scm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dotnetcore.json\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" day4/apps/dotnetcore/Scm/*\n")])])]),s("p",[t._v("Here we specified when the build must be triggered. The build is triggered only if changes were made to the master branch and when the changes were made to either "),s("code",[t._v("_day4/apps/infrastructure/templates/scm-api-dotnetcore.json_")]),t._v(" or to any files under directory "),s("code",[t._v("\\*day4/apps/dotnetcore/Scm/\\*\\*")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("Add the following yaml snippet to define the needed build steps:")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build Scm Contacts\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vmImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DotNetCoreCLI@2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Restore\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" restore\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4/apps/dotnetcore/Scm/**/*.csproj'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DotNetCoreCLI@2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4/apps/dotnetcore/Scm/**/*.csproj'")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("arguments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configuration Release\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DotNetCoreCLI@2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Publish\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" publish\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publishWebProjects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" day4/apps/dotnetcore/Scm/Adc.Scm.Api/Adc.Scm.Api.csproj\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("arguments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configuration Release "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output $(build.artifactstagingdirectory)\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zipAfterPublish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("True")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CopyFiles@2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sourceFolder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" day4/apps/infrastructure/templates\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n            scm-api-dotnetcore.json")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetFolder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $(Build.ArtifactStagingDirectory)\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PublishPipelineArtifact@1\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $(Build.ArtifactStagingDirectory)\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("artifactName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" drop\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("Commit your changes and push the branch to your remote repository.")]),t._v(" "),s("li",[t._v("Navigate to your Azure DevOps project")]),t._v(" "),s("li",[t._v("In your project navigate to the Pipelines page. Then choose the action to create a new pipeline")]),t._v(" "),s("li",[t._v("Walk through the steps of the wizard by first selecting Azure Repos Git as the location of your source code")]),t._v(" "),s("li",[t._v("Select your college repository")]),t._v(" "),s("li",[t._v("Select "),s("em",[t._v('"Existing Azure Pipelines YAML file"')])]),t._v(" "),s("li",[t._v("Select your feature branch and specify the path: "),s("em",[t._v('"/day4/apps/pipelines/scm-contacts-ci.yaml"')])]),t._v(" "),s("li",[t._v("Run your CI Build by clicking the action "),s("em",[t._v('"Run"')])]),t._v(" "),s("li",[t._v("Rename your CI Build to "),s("em",[t._v('"SCM-Contacts-CI"')])]),t._v(" "),s("li",[t._v("Navigate to the Pipelines page and open the last run of the build "),s("em",[t._v('"SCM-Contacts-CI"')]),t._v(". You see that the artifact is linked to your build.")])]),t._v(" "),s("h2",{attrs:{id:"create-the-pull-request-validation-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-pull-request-validation-build"}},[t._v("#")]),t._v(" Create the Pull Request Validation Build")]),t._v(" "),s("p",[t._v("In "),s("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-2.html"}},[t._v("Challenge 2")]),t._v(" we configured the master branch's policies to require a "),s("em",[t._v("Pull Request")]),t._v(" before changes are merged into the master.\nWith Azure Pipelines you can define a build that is executed whenever a Pull Request is created in order to validate a merge into the master branch.")],1),t._v(" "),s("ol",[s("li",[t._v("Add a file named "),s("code",[t._v("scm-contacts-pr.yaml")]),t._v(" in the directory "),s("code",[t._v("day4/apps/pipelines")])]),t._v(" "),s("li",[t._v("Add the following yaml snippet:")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trigger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build Scm Contacts\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vmImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UseDotNet@2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Acquire .NET Core Sdk 3.1.x'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("packageType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Sdk\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3.1.x\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DotNetCoreCLI@2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Restore\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" restore\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4/apps/dotnetcore/Scm/**/*.csproj'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DotNetCoreCLI@2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4/apps/dotnetcore/Scm/**/*.csproj'")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("arguments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configuration Release\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DotNetCoreCLI@2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Publish\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" publish\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publishWebProjects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" day4/apps/dotnetcore/Scm/Adc.Scm.Api/Adc.Scm.Api.csproj\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("arguments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configuration Release "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output $(build.artifactstagingdirectory)\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zipAfterPublish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("True")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Commit your changes and push the branch to your remote repository.")]),t._v(" "),s("li",[t._v("Navigate to your Azure DevOps project")]),t._v(" "),s("li",[t._v("In your project navigate to the Pipelines page. Then choose the action to create a new pipeline")]),t._v(" "),s("li",[t._v("Walk through the steps of the wizard by first selecting Azure Repos Git as the location of your source code")]),t._v(" "),s("li",[t._v("Select your repository")]),t._v(" "),s("li",[t._v("Select "),s("em",[t._v('"Existing Azure Pipelines YAML file"')])]),t._v(" "),s("li",[t._v("Select your feature branch and specify the path: "),s("em",[t._v('"/day4/apps/pipelines/scm-contacts-pr.yaml"')])]),t._v(" "),s("li",[t._v("Run your PR Build by clicking the action "),s("em",[t._v('"Run"')])]),t._v(" "),s("li",[t._v("Rename your PR Build to "),s("em",[t._v('"SCM-Contacts-PR"')])])]),t._v(" "),s("h2",{attrs:{id:"create-the-cd-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-cd-build"}},[t._v("#")]),t._v(" Create the CD Build")]),t._v(" "),s("p",[t._v("Now we have created the deployment artifacts with the build "),s("em",[t._v("SCM-Contacts-CI")]),t._v(". It is time to create a Release build to deploy the SCM Contacts API to Azure. As in "),s("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-3.html"}},[t._v("Challenge 3")]),t._v(" we deploy the artifacts to the stages "),s("em",[t._v("Development")]),t._v(" and "),s("em",[t._v("Testing")]),t._v(" and we create a manual "),s("em",[t._v("Pre-deployment condition")]),t._v(" to approve the deployment to the "),s("em",[t._v("Testing")]),t._v(" stage.")],1),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create a new release pipeline and name it "),s("em",[t._v("SCM-Contacts-CD")])])]),t._v(" "),s("li",[s("p",[t._v("Add the SCM-Contacts-CI build's artifacts")])]),t._v(" "),s("li",[s("p",[t._v("Create a "),s("em",[t._v("Development")]),t._v(" stage")])]),t._v(" "),s("li",[s("p",[t._v("Add the the following variables and replace "),s("strong",[t._v("'prefix'")]),t._v(" with your own value:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Scope")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ResourceGroupName")]),t._v(" "),s("td",[t._v("ADC-DAY4-SCM-DEV")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("Location")]),t._v(" "),s("td",[t._v("westeurope")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("ApiAppName")]),t._v(" "),s("td",[s("strong",[t._v("'prefix'")]),t._v("-day4scmapi-dev")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("AppServicePlanSKU")]),t._v(" "),s("td",[t._v("B1")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("Use32BitWorker")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("AlwaysOn")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("ApplicationInsightsName")]),t._v(" "),s("td",[t._v("your ApplicationInsights instance name of stage Development")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("SqlServerName")]),t._v(" "),s("td",[s("strong",[t._v("'prefix'")]),t._v("-day4sqlsrv-dev")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("SqlDatabaseName")]),t._v(" "),s("td",[t._v("scmcontactsdb")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("SqlAdminUserName")]),t._v(" "),s("td",[s("em",[t._v("your Sql Admin's username")])]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("SqlAdminPassword")]),t._v(" "),s("td",[s("em",[t._v("your password")])]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("ServiceBusNamespaceName")]),t._v(" "),s("td",[t._v("your ServiceBus namespace name of stage Development")]),t._v(" "),s("td",[t._v("Development")])])])])]),t._v(" "),s("li",[s("p",[t._v("Go to the Tasks section of the "),s("em",[t._v('"Development"')]),t._v(" stage and use the latest Ubuntu version to run the agent on")])]),t._v(" "),s("li",[s("p",[t._v("Add the task "),s("em",[t._v('"ARM template deployment"')])])]),t._v(" "),s("li",[s("p",[t._v("Select your Azure Subscription")])]),t._v(" "),s("li",[s("p",[t._v("Set the name of the ResourceGroup, use the variable $(ResourceGroupName)")])]),t._v(" "),s("li",[s("p",[t._v("Set the Location, use the variable $(Location)")])]),t._v(" "),s("li",[s("p",[t._v("Select the template from your drop location")])]),t._v(" "),s("li",[s("p",[t._v("Override the template parameters as follow:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("-sku "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("AppServicePlanSKU"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" -webAppName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("ApiAppName"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" -use32bitworker "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("Use32BitWorker"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" -alwaysOn "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("AlwaysOn"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" -applicationInsightsName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("ApplicationInsightsName"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" -sqlServerName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("SqlServerName"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" -sqlUserName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("SqlAdminUserName"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" -sqlPassword "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("SqlAdminPassword"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" -sqlDatabaseName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("SqlDatabaseName"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" -serviceBusNamespaceName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("ServiceBusNamespaceName"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])]),s("p",[t._v("Make sure that you copy the whole line.")])]),t._v(" "),s("li",[s("p",[t._v("Add "),s("em",[t._v("Azure App Service deploy")]),t._v(" task")])]),t._v(" "),s("li",[s("p",[t._v("Select your Azure Subscription")])]),t._v(" "),s("li",[s("p",[t._v("Choose "),s("em",[t._v("API App")]),t._v(" as AppService type")])]),t._v(" "),s("li",[s("p",[t._v("Use the variable "),s("em",[t._v("$(ApiAppName)")]),t._v(" to set the App Service name")])]),t._v(" "),s("li",[s("p",[t._v("Add your dotnet core deployment zip file from your artifact location")])]),t._v(" "),s("li",[s("p",[t._v("Save the release definition and create a release to check if everything works")])])]),t._v(" "),s("h3",{attrs:{id:"create-the-testing-stage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-testing-stage"}},[t._v("#")]),t._v(" Create the "),s("em",[t._v("Testing")]),t._v(" stage")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Edit the Release definition and go to the task view")])]),t._v(" "),s("li",[s("p",[t._v("Clone the "),s("em",[t._v("Development")]),t._v(" stage and rename the cloned stage to "),s("em",[t._v("Testing")])])]),t._v(" "),s("li",[s("p",[t._v("Open the Release definition's variable view and add new variables as follow:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Scope")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ResourceGroupName")]),t._v(" "),s("td",[t._v("ADC-DAY4-SCM-TEST")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("Location")]),t._v(" "),s("td",[t._v("westeurope")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("ApiAppName")]),t._v(" "),s("td",[s("strong",[t._v("'prefix'")]),t._v("-day4scmapi-test")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("AppServicePlanSKU")]),t._v(" "),s("td",[t._v("B1")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("Use32BitWorker")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("AlwaysOn")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("ApplicationInsightsName")]),t._v(" "),s("td",[t._v("your ApplicationInsights instance name of stage Testing")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("SqlServerName")]),t._v(" "),s("td",[s("strong",[t._v("'prefix'")]),t._v("-day4sqlsrv-test")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("SqlDatabaseName")]),t._v(" "),s("td",[t._v("scmcontactsdb")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("SqlAdminUserName")]),t._v(" "),s("td",[s("em",[t._v("your Sql Admin's username")])]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("SqlAdminPassword")]),t._v(" "),s("td",[s("em",[t._v("your password")])]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("ServiceBusNamespaceName")]),t._v(" "),s("td",[t._v("your ServiceBus namespace name of stage Testing")]),t._v(" "),s("td",[t._v("Testing")])])])])]),t._v(" "),s("li",[s("p",[t._v("Save the definition and create a release")])])]),t._v(" "),s("h2",{attrs:{id:"create-a-pull-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-pull-request"}},[t._v("#")]),t._v(" Create a Pull Request")]),t._v(" "),s("p",[t._v("Create a Pull Request and merge all changes into the master branch. Don't forget to link the User Stories S4 and S5.")]),t._v(" "),s("h2",{attrs:{id:"trigger-the-pr-build-to-validate-a-pull-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trigger-the-pr-build-to-validate-a-pull-request"}},[t._v("#")]),t._v(" Trigger the PR-Build to validate a Pull Request")]),t._v(" "),s("p",[t._v("Now we have to enable the PR-Build to be triggered whenever a Pull Request is created and when files are changed that belongs to the SCM Contacts API.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open the branch policies of the master branch")])]),t._v(" "),s("li",[s("p",[t._v("Add a build validation and select your SCM-Contacts-PR build")])]),t._v(" "),s("li",[s("p",[t._v("Set the path filter as follow:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("/day4/apps/infrastructure/templates/scm-api-dotnetcore.json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("/day4/apps/dotnetcore/Scm/*\n")])])]),s("p",[t._v("With this filter the PR build is only triggered when files were changed that belongs to the SCM Contacts API")])]),t._v(" "),s("li",[s("p",[t._v("Save your changes")])])]),t._v(" "),s("h2",{attrs:{id:"see-the-build-flow-in-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#see-the-build-flow-in-action"}},[t._v("#")]),t._v(" See the Build Flow in Action")]),t._v(" "),s("p",[t._v("Now it's time to see the whole build flow in action.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Checkout the master branch and pull the latest changes")])]),t._v(" "),s("li",[s("p",[t._v("Create and checkout a new feature branch "),s("em",[t._v("features/scmcontactsflow")])])]),t._v(" "),s("li",[s("p",[t._v("Open the file "),s("a",{attrs:{href:"../apps/dotnetcore/Scm/Adc.Scm.Api/Startup.cs"}},[t._v("day4/apps/dotnetcore/Scm/Adc.Scm.Api/Startup.cs")]),t._v(" and change the name of the API in the Swagger configurations:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// here")]),t._v("\nc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SwaggerDoc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("OpenApiInfo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Title "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ADC Contacts API"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and here")]),t._v("\nc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SwaggerEndpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/swagger/v1/swagger.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ADC Contacts API v1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Commit your changes and push the feature branch to your remote repository")])]),t._v(" "),s("li",[s("p",[t._v("Create a "),s("em",[t._v("Pull Request")]),t._v(" to merge the changes into the master branch. Don't forget to link the User Story S5.\nYou will see that the PR-Build is part of the required policies of your Pull Request.\n"),s("img",{attrs:{src:a(352),alt:"PullRequest"}})])]),t._v(" "),s("li",[s("p",[t._v("Complete your Pull Request")])]),t._v(" "),s("li",[s("p",[t._v("Navigate to the Pipelines view and you will notice that the SCM-Contacts-CI build is triggered\n"),s("img",{attrs:{src:a(662),alt:"SCM-Contact-CI"}}),t._v("\nWait until the build is finished and the deployment artifacts are available.")])]),t._v(" "),s("li",[s("p",[t._v("Navigate to the Release view and you will see that the CD Pipeline is triggered and starts to deploy the artifacts to the Development stage.")])]),t._v(" "),s("li",[s("p",[t._v("Go to Azure Boards and set the User Stories S4 and S5 to completed.")])])]),t._v(" "),s("h2",{attrs:{id:"wrap-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[t._v("#")]),t._v(" Wrap-Up")]),t._v(" "),s("p",[t._v("🥳 "),s("strong",[t._v("Congratulation")]),t._v(" - You have completed the User Stories S4 and S5. 🥳")]),t._v(" "),s("p",[t._v("Now you have seen how you can create a "),s("em",[t._v("Pull Request validation build")]),t._v(" that protects your master branch from build breaks. After changes are merged into the master branch, the CI build is triggered and it creates the deployment artifacts. The deployment artifacts are then deployed to your stages. After this challenge we have the following architecture deployed to Azure:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(663),alt:"SCM Contacts API"}})]),t._v(" "),s("p",[t._v("Now navigate to the Azure portal, open the SCM Contacts API's API App in the ResourceGroup "),s("code",[t._v("ADC-DAY4-SCM-TEST")]),t._v(" and browse to the Swagger UI.\nIf you want you can test the API.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-3.html"}},[t._v("◀ Previous challenge")]),t._v(" | "),s("RouterLink",{attrs:{to:"/day4-azdevops/"}},[t._v("🔼 Day 4")]),t._v(" | "),s("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-5.html"}},[t._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);