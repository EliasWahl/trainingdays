(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{782:function(e,t,n){e.exports=n.p+"assets/img/dockerlogo.7bcbbab5.png"},783:function(e,t,n){e.exports=n.p+"assets/img/dockerlinux.d3d216f6.png"},784:function(e,t,n){e.exports=n.p+"assets/img/vscode_extensions.c0ffad26.png"},917:function(e,t,n){"use strict";n.r(t);var s=n(32),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"challenge-0-prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#challenge-0-prerequisites"}},[e._v("#")]),e._v(" Challenge 0: Prerequisites")]),e._v(" "),s("p",[e._v("To be able to follow all the challenges provided in this workshop, you need a few prerequisites on your machine. This challenge is for setting up your system before the workshop day.")]),e._v(" "),s("h2",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),s("img",{attrs:{src:n(782),width:"200"}}),e._v(" "),s("p",[e._v("It's obvious that it's expected you to have Docker installed on your computer. But installation process is not as seamless as it has to be. Docker publishes different packages for different operating systems. Please follow the section of your operating system below and install related Docker package published for your operating system.")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("If you can't install any software on your computer due to company policies or other reasons, please spin up an Ubuntu VM on Azure and follow the Linux section below")])])]),e._v(" "),s("h3",{attrs:{id:"mac-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac-os"}},[e._v("#")]),e._v(" Mac Os")]),e._v(" "),s("p",[e._v("Docker Desktop for Mac is available for macOS 10.13 or newer: i.e. High Sierra (10.13), Mojave (10.14) or Catalina (10.15). Mac hardware must be a 2010 or a newer model.")]),e._v(" "),s("p",[s("strong",[e._v("Installation")])]),e._v(" "),s("ol",[s("li",[e._v('Visit "Docker Desktop for Mac" section of the Docker Hub --\x3e  '),s("a",{attrs:{href:"https://hub.docker.com/editions/community/docker-ce-desktop-mac/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/editions/community/docker-ce-desktop-mac/"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("Get Docker")]),e._v(" link on the right side of the page and download "),s("strong",[e._v("Docker.dmg")]),e._v(" file")]),e._v(" "),s("li",[e._v("Double-click "),s("strong",[e._v("Docker.dmg")]),e._v(" to start the install process.")]),e._v(" "),s("li",[e._v("When the installation completes and Docker starts, the whale in the top status bar shows that Docker is running, and accessible from a terminal.\n"),s("img",{attrs:{src:"https://d1q6f0aelx0por.cloudfront.net/icons/whale-in-menu-bar.png"}})]),e._v(" "),s("li",[e._v("After the installation, check if everything works as expected. Open your favourite terminal application and execute the "),s("strong",[e._v("docker version")]),e._v(" and "),s("strong",[e._v("docker run hello-world")]),e._v(" commands. If you get the similar outputs as below, it means that your docker installation has been successfully completed.")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ docker version\nClient: Docker Engine - Community\n Version:           "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("19.03")]),e._v(".8\n API version:       "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.40")]),e._v("\n Go version:        go1.12.17\n Git commit:        afacb8b7f0\n Built:             Wed Mar "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" 01:25:46 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("\n OS/Arch:           linux/amd64\n Experimental:      "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n\nServer: Docker Engine - Community\n Engine:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("19.03")]),e._v(".8\n  API version:      "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.40")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("minimum version "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  Go version:       go1.12.17\n  Git commit:       afacb8b\n  Built:            Wed Mar "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" 01:29:16 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("\n  OS/Arch:          linux/amd64\n  Experimental:     "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n containerd:\n  Version:          v1.2.13\n  GitCommit:        7ad184331fa3e55e52b890ea95e65ba581ae3429\n runc:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),e._v(".0-rc10\n  GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd\n docker-init:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.18")]),e._v(".0\n  GitCommit:        fec3683\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ docker run hello-world\n\nHello from Docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(". The Docker client contacted the Docker daemon.\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(". The Docker daemon pulled the "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello-world"')]),e._v(" image from the Docker Hub.\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("amd64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(". The Docker daemon created a new container from that image "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" runs the\n    executable that produces the output you are currently reading.\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(". The Docker daemon streamed that output to the Docker client, "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" sent it\n    to your terminal.\n\nTo try something "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n\nShare images, automate workflows, and "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" with a "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v(" Docker ID:\n https://hub.docker.com/\n\nFor "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])])]),s("h3",{attrs:{id:"windows-10-professional-enterprise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-10-professional-enterprise"}},[e._v("#")]),e._v(" Windows 10 Professional & Enterprise")]),e._v(" "),s("p",[e._v("Docker Desktop for Windows is available for  Windows 10 Professional & Enterprise editions. Docker Desktop for Windows uses Windows-native Hyper-V virtualization and networking and is the fastest and most reliable way to develop Docker apps on Windows. For all the other versions of Windows please follow the next section below.")]),e._v(" "),s("p",[s("strong",[e._v("Installation")])]),e._v(" "),s("ol",[s("li",[e._v('Visit "Docker Desktop for Windows" section of the Docker Hub --\x3e  '),s("a",{attrs:{href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/editions/community/docker-ce-desktop-windows"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("Get Docker")]),e._v(" link on the right side of the page and download "),s("strong",[e._v("Docker for Windows Installer")]),e._v(" file")]),e._v(" "),s("li",[e._v("Double-click "),s("strong",[e._v("Docker for Windows Installer")]),e._v(" to run the installer.")]),e._v(" "),s("li",[e._v("When the installation finishes, Docker starts automatically. The whale "),s("img",{attrs:{src:"https://d1q6f0aelx0por.cloudfront.net/icons/whale-x-win.png"}}),e._v(" in the notification area indicates that Docker is running, and accessible from a terminal.")]),e._v(" "),s("li",[e._v("After the installation, check if everything works as expected. Open your Windows Powershell  terminal application and execute the "),s("strong",[e._v("docker version")]),e._v(" and "),s("strong",[e._v("docker run hello-world")]),e._v(" commands. If you get the similar outputs as below, it means that your docker installation has been successfully completed.")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" docker version\nClient: Docker Engine - Community\n Version:           "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("19.03")]),e._v(".8\n API version:       "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.40")]),e._v("\n Go version:        go1.12.17\n Git commit:        afacb8b7f0\n Built:             Wed Mar "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" 01:25:46 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("\n OS/Arch:           linux/amd64\n Experimental:      "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n\nServer: Docker Engine - Community\n Engine:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("19.03")]),e._v(".8\n  API version:      "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.40")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("minimum version "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  Go version:       go1.12.17\n  Git commit:       afacb8b\n  Built:            Wed Mar "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" 01:29:16 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("\n  OS/Arch:          linux/amd64\n  Experimental:     "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n containerd:\n  Version:          v1.2.13\n  GitCommit:        7ad184331fa3e55e52b890ea95e65ba581ae3429\n runc:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),e._v(".0-rc10\n  GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd\n docker-init:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.18")]),e._v(".0\n  GitCommit:        fec3683\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" docker run hello-world\n\nHello from Docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(". The Docker client contacted the Docker daemon.\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(". The Docker daemon pulled the "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello-world"')]),e._v(" image from the Docker Hub.\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("amd64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(". The Docker daemon created a new container from that image "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" runs the\n    executable that produces the output you are currently reading.\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(". The Docker daemon streamed that output to the Docker client, "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" sent it\n    to your terminal.\n\nTo try something "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n\nShare images, automate workflows, and "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" with a "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v(" Docker ID:\n https://hub.docker.com/\n\nFor "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])])]),s("h3",{attrs:{id:"windows-7-8-10-home-edition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-7-8-10-home-edition"}},[e._v("#")]),e._v(" Windows 7 - 8 - 10 (Home Edition)")]),e._v(" "),s("p",[e._v("Because the Docker Engine daemon uses Linux-specific kernel features, you can’t run Docker Engine natively on Windows. Instead, you must create and attach to a small Linux VM on your machine. This VM hosts Docker Engine for you on your Windows system. "),s("strong",[e._v("Docker Desktop for Windows")]),e._v(" that we mentioned one section above  uses native hyper-v virtualization technology which you'll be able to get with Windows 10 Professional & Enterprise editions. But Windows 7 - 8 - 10 (Home Edition) don't have hyper-v virtualization technology. That's the reason why you can't install "),s("strong",[e._v("Docker Desktop for Windows")]),e._v(" on these operating systems."),s("br"),e._v("\nInstead of that Docker published another tool called "),s("strong",[e._v("Docker Toolbox")]),e._v(" which uses docker-machine tool, to create and attach to a small Linux VM on these operating system. This VM hosts Docker Engine for you on these systems.")]),e._v(" "),s("p",[e._v("Docker Toolbox includes the following Docker tools:")]),e._v(" "),s("ul",[s("li",[e._v("Docker CLI client for running Docker Engine to create images and containers")]),e._v(" "),s("li",[e._v("Docker Machine so you can run Docker Engine commands from Windows terminals")]),e._v(" "),s("li",[e._v("Docker Compose for running the docker-compose command")]),e._v(" "),s("li",[e._v("Kitematic, the Docker GUI\nthe Docker QuickStart shell pre-configured for a - Docker command-line environment")]),e._v(" "),s("li",[e._v("Oracle VM VirtualBox")])]),e._v(" "),s("p",[s("strong",[e._v("Prerequisites")])]),e._v(" "),s("ul",[s("li",[e._v("To run Docker, your machine must have a 64-bit operating system. 32-bit operating system must be upgraded to 64-bit versions")]),e._v(" "),s("li",[e._v("Make sure your Windows system supports Hardware Virtualization Technology and that virtualization is enabled.\n"),s("ul",[s("li",[s("p",[e._v("For Windows 10 | Run Speccy --\x3e https://www.piriform.com/speccy, and look at the CPU information.")])]),e._v(" "),s("li",[s("p",[e._v('For Windows 8 or 8.1 | Choose Start > Task Manager and navigate to the Performance tab. Under CPU you should see the Virtualization section which must be "Enabled".')])]),e._v(" "),s("li",[s("p",[e._v("For Windows 7 Run Speccy --\x3e https://www.piriform.com/speccyand follow the on-screen instructions.")])])])])]),e._v(" "),s("p",[s("em",[s("strong",[e._v("If virtualization is not enabled on your system, follow the manufacturer’s instructions for enabling it.")])])]),e._v(" "),s("p",[s("strong",[e._v("Installation")])]),e._v(" "),s("ol",[s("li",[e._v('Visit "docker/toolbox" releases section of the Github Repository --\x3e  '),s("a",{attrs:{href:"https://github.com/docker/toolbox/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/docker/toolbox/releases"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Click the latest "),s("strong",[e._v("DockerToolbox-xx.xx.x.exe")]),e._v(" file under the latest releases assets section and download the file.")]),e._v(" "),s("li",[e._v("Double-click "),s("strong",[e._v("DockerToolbox-xx.xx.x.exe")]),e._v(" to run the installer.")]),e._v(" "),s("li",[e._v("The installer launches the "),s("strong",[e._v("Setup - Docker Toolbox")]),e._v(" dialog.\nIf Windows security dialog prompts you to allow the program to make a change, choose "),s("strong",[e._v("Yes")]),e._v(". The system displays the "),s("strong",[e._v("Setup - Docker Toolbox for Windows")]),e._v(" wizard.")]),e._v(" "),s("li",[e._v("Press "),s("strong",[e._v("Next")]),e._v(" to accept all the defaults and then "),s("strong",[e._v("Install")]),e._v(".\nAccept all the installer defaults. The installer takes a few minutes to install all the components:")])]),e._v(" "),s("ul",[s("li",[e._v("Docker Client for Windows")]),e._v(" "),s("li",[e._v("Docker Compose")]),e._v(" "),s("li",[e._v("Docker Toolbox management tool and ISO")]),e._v(" "),s("li",[e._v("Git MSYS-git UNIX tools")]),e._v(" "),s("li",[e._v("Kitematic, the Docker GUI")]),e._v(" "),s("li",[e._v("the Docker QuickStart shell pre-configured for a Docker command-line environment")]),e._v(" "),s("li",[e._v("Oracle VM VirtualBox")])]),e._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[s("p",[e._v("When notified by Windows Security the installer will make changes, make sure you allow the installer to make the necessary changes. When it completes, the installer reports it was successful.")])]),e._v(" "),s("li",[s("p",[e._v("The installer adds Docker Toolbox, VirtualBox, and Kitematic to your Applications folder. On your Desktop, find the Docker QuickStart Terminal icon.")])]),e._v(" "),s("li",[s("p",[e._v("Click the Docker QuickStart icon to launch a pre-configured Docker Toolbox terminal. If the system displays a "),s("strong",[e._v("User Account Control")]),e._v(" prompt to allow VirtualBox to make changes to your computer. Choose "),s("strong",[e._v("Yes")]),e._v(". The terminal does several things to set up Docker Toolbox for you. When it is done, the terminal displays the "),s("strong",[e._v("$")]),e._v(" prompt. The terminal runs a special bash environment instead of the standard Windows command prompt.")])]),e._v(" "),s("li",[s("p",[e._v("After the installation, check if everything works as expected. On the terminal, execute the "),s("strong",[e._v("docker version")]),e._v(" and "),s("strong",[e._v("docker run hello-world")]),e._v(" commands. If you get the similar outputs as below, it means that your docker installation has been successfully completed.")])])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ docker version\nClient: Docker Engine - Community\n Version:           "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("19.03")]),e._v(".8\n API version:       "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.40")]),e._v("\n Go version:        go1.12.17\n Git commit:        afacb8b7f0\n Built:             Wed Mar "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" 01:25:46 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("\n OS/Arch:           linux/amd64\n Experimental:      "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n\nServer: Docker Engine - Community\n Engine:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("19.03")]),e._v(".8\n  API version:      "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.40")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("minimum version "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  Go version:       go1.12.17\n  Git commit:       afacb8b\n  Built:            Wed Mar "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" 01:29:16 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("\n  OS/Arch:          linux/amd64\n  Experimental:     "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n containerd:\n  Version:          v1.2.13\n  GitCommit:        7ad184331fa3e55e52b890ea95e65ba581ae3429\n runc:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),e._v(".0-rc10\n  GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd\n docker-init:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.18")]),e._v(".0\n  GitCommit:        fec3683\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ docker run hello-world\n\nHello from Docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(". The Docker client contacted the Docker daemon.\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(". The Docker daemon pulled the "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello-world"')]),e._v(" image from the Docker Hub.\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("amd64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(". The Docker daemon created a new container from that image "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" runs the\n    executable that produces the output you are currently reading.\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(". The Docker daemon streamed that output to the Docker client, "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" sent it\n    to your terminal.\n\nTo try something "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n\nShare images, automate workflows, and "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" with a "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v(" Docker ID:\n https://hub.docker.com/\n\nFor "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])])]),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),s("p",[e._v("Docker Engine is available on a variety of Linux platforms as a static binary installation. Docker provides "),s("strong",[e._v(".deb")]),e._v(" and "),s("strong",[e._v(".rpm")]),e._v(" packages from the following Linux distributions and architectures:\n"),s("img",{attrs:{src:n(783)}})]),e._v(" "),s("p",[s("strong",[e._v("Installation")])]),e._v(" "),s("p",[e._v("Follow the instructions below to install Docker on your distro:")]),e._v(" "),s("ul",[s("li",[e._v("https://docs.docker.com/engine/install/centos/")]),e._v(" "),s("li",[e._v("https://docs.docker.com/engine/install/debian/")]),e._v(" "),s("li",[e._v("https://docs.docker.com/engine/install/fedora/")]),e._v(" "),s("li",[e._v("https://docs.docker.com/engine/install/ubuntu/")])]),e._v(" "),s("p",[s("strong",[e._v("Ubuntu:")])]),e._v(" "),s("p",[e._v("Open your terminal application and execute the following commands.")]),e._v(" "),s("ol",[s("li",[e._v("Older versions of Docker were called docker, docker.io, or docker-engine. If these are installed, uninstall them:")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" remove docker docker-engine docker.io containerd runc\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Download and run the installation script.")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -fsSL https://get.docker.com -o get-docker.sh\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" get-docker.sh\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("If you would like to use Docker as a non-root user, you should now consider adding your user to the “docker” group with something like:")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -aG docker your-user\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("After the installation, check if everything works as expected. On the terminal, execute the "),s("strong",[e._v("docker version")]),e._v(" and "),s("strong",[e._v("docker run hello-world")]),e._v(" commands. If you get the similar outputs as below, it means that your docker installation has been successfully completed.")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ docker version\nClient: Docker Engine - Community\n Version:           "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("19.03")]),e._v(".8\n API version:       "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.40")]),e._v("\n Go version:        go1.12.17\n Git commit:        afacb8b7f0\n Built:             Wed Mar "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" 01:25:46 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("\n OS/Arch:           linux/amd64\n Experimental:      "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n\nServer: Docker Engine - Community\n Engine:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("19.03")]),e._v(".8\n  API version:      "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.40")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("minimum version "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  Go version:       go1.12.17\n  Git commit:       afacb8b\n  Built:            Wed Mar "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" 01:29:16 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("\n  OS/Arch:          linux/amd64\n  Experimental:     "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n containerd:\n  Version:          v1.2.13\n  GitCommit:        7ad184331fa3e55e52b890ea95e65ba581ae3429\n runc:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),e._v(".0-rc10\n  GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd\n docker-init:\n  Version:          "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.18")]),e._v(".0\n  GitCommit:        fec3683\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ docker run hello-world\n\nHello from Docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(". The Docker client contacted the Docker daemon.\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(". The Docker daemon pulled the "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello-world"')]),e._v(" image from the Docker Hub.\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("amd64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(". The Docker daemon created a new container from that image "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" runs the\n    executable that produces the output you are currently reading.\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(". The Docker daemon streamed that output to the Docker client, "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" sent it\n    to your terminal.\n\nTo try something "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n\nShare images, automate workflows, and "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" with a "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v(" Docker ID:\n https://hub.docker.com/\n\nFor "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])])]),s("h2",{attrs:{id:"docker-hub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub"}},[e._v("#")]),e._v(" Docker Hub")]),e._v(" "),s("p",[e._v("If you didn't sign up yet, we recommend you to sign up and create your Docker ID. This will allow you to create public and private repositories to store your own Docker Images.")]),e._v(" "),s("ul",[s("li",[e._v("Visit "),s("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/"),s("OutboundLink")],1),e._v(" and fill the form, click "),s("strong",[e._v("Sign Up")]),e._v(" button and create your Docker ID.")]),e._v(" "),s("li",[e._v("Check your mailbox and confirm your account creation.")])]),e._v(" "),s("h2",{attrs:{id:"visual-studio-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code"}},[e._v("#")]),e._v(" Visual Studio Code")]),e._v(" "),s("p",[e._v("To work with all the samples provided in this workshop, you will need an IDE. To target a wide range of developers/architects, we will be using Visual Studio Code as it runs cross-platform.")]),e._v(" "),s("p",[e._v("Therefore, go to "),s("a",{attrs:{href:"https://code.visualstudio.com/docs/setup/setup-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://code.visualstudio.com/docs/setup/setup-overview"),s("OutboundLink")],1),e._v(" and install it on your machine.")]),e._v(" "),s("h3",{attrs:{id:"useful-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useful-extensions"}},[e._v("#")]),e._v(" Useful Extensions")]),e._v(" "),s("p",[e._v('After the setup is complete, open "Visual Studio" and open the "Extensions" sidebar:')]),e._v(" "),s("p",[s("img",{attrs:{src:n(784),alt:"Visual Studio Extensions",title:"VS Code Extensions"}})]),e._v(" "),s("p",[e._v("Search and install the following extension:")]),e._v(" "),s("ul",[s("li",[e._v("Docker for Visual Studio Code "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);