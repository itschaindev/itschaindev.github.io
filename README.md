## Personal Blog

This is a place where I will write about my thoughts occassionally.
Topics would mostly consist of philosophy, tech and social causes that I care about.

Built using Jekyll.
For customization options, change field values in `_config.yml`.

## Advanced: Local development using Docker

Beautiful Jekyll is meant to be so simple to use that you can do it all within the browser. However, if you'd like to develop locally on your own machine, that's possible too if you're comfortable with command line. Follow these simple steps set that up with Docker:

1. Make sure you have [Docker](https://www.docker.com/) installed.

2. Clone your repository locally.

    ```bash
    git clone https://github.com/<your_username>/<your_username>.github.io.git
    ```

3. Run the following shell commands to build the docker image and start the container for the first time:

    ```bash
    cd <repository_folder>
    docker build -t beautiful-jekyll "$PWD"
    docker run -d -p 4000:4000 --name beautiful-jekyll -v "$PWD":/srv/jekyll beautiful-jekyll
    ```


Now that Docker is set up, you do not need to run the above steps again. You can now view your website at http://localhost:4000/. You can start the container again in the future with:

```bash
docker start beautiful-jekyll
```

And you can stop the server with:

```bash
docker stop beautiful-jekyll
```

Whenever you make any changes to `_config.yml`, you must stop and re-start the server for the new config settings to take effect.

Disclaimer: I personally am NOT using local development so I don't know much about running Jekyll locally. If you follow this route, please don't ask me questions because unfortunately I honestly won't be able to help!

### Credits

[Beautiful-Jekyll](https://github.com/daattali/beautiful-jekyll)