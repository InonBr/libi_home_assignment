# libi_home_assignment

Please clone this directory and read the manual in order to understend how to run the application.

## Back End Setup

1. Enter the repository `./back_end`.
2. Create a `.env` file.
3. Create a token in the `.env` you've just created, like this ==> `TOKEN=some_secret_key`

## Use Docker

1. In the terminal, enter the base repository where the file `docker-compose.yml` is in.
2. Execute the command `sudo docker-compose build` in order to set up the images.
3. Run `sudo docker-compose up -d` in order to run all images (MongoDB, back-end and front-end).
4. In your browser, jump to `http://localhost:3000/`.
5. The username and password are bouth "admin".
6. When finish, run `sudo docker-compose down` in order to close the running images.
