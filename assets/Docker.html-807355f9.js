const e=JSON.parse('{"key":"v-101edae1","path":"/services/Docker.html","title":"Docker","lang":"zh-CN","frontmatter":{"article":false,"title":"Docker","icon":"any","order":4,"description":"Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。 Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 NAS 上搭建 Docker。","head":[["meta",{"property":"og:url","content":"https://handongfang.github.io/LearnData/LearnData/services/Docker.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Docker"}],["meta",{"property":"og:description","content":"Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。 Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 NAS 上搭建 Docker。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-31T05:49:37.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-31T05:49:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Docker\\",\\"description\\":\\"Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。 Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 NAS 上搭建 Docker。\\"}"]]},"headers":[{"level":2,"title":"Docker 命令","slug":"docker-命令","link":"#docker-命令","children":[]},{"level":2,"title":"定制 Docker 镜像","slug":"定制-docker-镜像","link":"#定制-docker-镜像","children":[]},{"level":2,"title":"Dockerfile 构建镜像","slug":"dockerfile-构建镜像","link":"#dockerfile-构建镜像","children":[]},{"level":2,"title":"其他使用","slug":"其他使用","link":"#其他使用","children":[{"level":3,"title":"Windows Docker","slug":"windows-docker","link":"#windows-docker","children":[]},{"level":3,"title":"宝塔镜像","slug":"宝塔镜像","link":"#宝塔镜像","children":[]}]}],"git":{"createdTime":1680241777000,"updatedTime":1680241777000,"contributors":[{"name":"handongfang","email":"82168448+handongfang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.11,"words":933},"filePathRelative":"services/Docker.md","localizedDate":"2023年3月31日","excerpt":"<p>Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。</p>\\n<p>Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 <a href=\\"/LearnData/services/NAS.html#nas-docker\\" target=\\"blank\\">NAS 上搭建 Docker</a>。</p>","autoDesc":true}');export{e as data};
