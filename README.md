## Italiano

### UniTime Docker Deployment

Questo repository contiene il Dockerfile e gli script necessari per configurare un'istanza di UniTime, un'applicazione web per la gestione del tempo nell'istruzione superiore, utilizzando Apache Tomcat e MySQL.

#### Prerequisiti

- Docker installato sul tuo sistema.
- Clone del repository git con i file necessari inclusi.

#### Struttura del Repository

Il repository include i seguenti file e directory cruciali:

- `Dockerfile`: definisce l'immagine Docker.
- `entrypoint.sh`: script per inizializzare il servizio MySQL e avviare Tomcat.
- `unitime-4.8/`: directory che contiene i file SQL e l'applicazione UniTime.
- `apache-tomcat-9.0.82/`: directory contenente una distribuzione di Tomcat configurata per l'uso con UniTime.

#### Costruzione dell'Immagine Docker

```sh
docker build -t unitime:latest .
```

#### Esecuzione del Container

```sh
docker run -d --name unitime_container -p 8080:8080 unitime:latest
```

#### Inizializzazione del Database

Lo script `entrypoint.sh` inizializzerà il servizio MySQL e il database `unitime`.

#### Monitoraggio dell'Aggiornamento del Database

```sh
docker logs -f unitime_container
```

#### Accesso all'Applicazione

L'applicazione UniTime sarà accessibile all'indirizzo `http://localhost:8080/UniTime`.

Credenziali di accesso:

- Tomcat: Username `admin`, Password `password`
- UniTime: Username `admin`, Password `admin`

#### Problemi Comuni e Supporto

Per domande o assistenza, apri un'issue in questo repository.

---

## English

### UniTime Docker Deployment

This repository contains the Dockerfile and scripts necessary to set up an instance of UniTime, a higher education time management web application, using Apache Tomcat and MySQL.

#### Prerequisites

- Docker installed on your system.
- Git repository clone with all required files included.

#### Repository Structure

The repository includes the following critical files and directories:

- `Dockerfile`: defines the Docker image.
- `entrypoint.sh`: script to initialize MySQL service and start Tomcat.
- `unitime-4.8/`: directory containing the SQL files and the UniTime application.
- `apache-tomcat-9.0.82/`: directory with a distribution of Tomcat set up for use with UniTime.

#### Building the Docker Image

```sh
docker build -t unitime:latest .
```

#### Running the Container

```sh
docker run -d --name unitime_container -p 8080:8080 unitime:latest
```

#### Database Initialization

The `entrypoint.sh` script will initialize the MySQL service and the `unitime` database.

#### Monitoring Database Update

```sh
docker logs -f unitime_container
```

#### Application Access

UniTime application will be accessible at `http://localhost:8080/UniTime`.

Login credentials:

- Tomcat: Username `admin`, Password `password`
- UniTime: Username `admin`, Password `admin`

#### Common Issues and Support

For questions or assistance, please open an issue in this repository.

---

Make sure to adjust any file paths or names as needed based on the actual files in your repository, and include any additional steps or requirements that are necessary for your project but not covered here.
<<<<<<< HEAD
=======

>>>>>>> 87a666d (UploadFiles)
