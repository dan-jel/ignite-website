## Spiele Updates Website

---

Diese Website ist mit React erstellt und nutzt die [rawg.io API](https://rawg.io/) um erfolgreiche und demnächst erscheinende Spiele anzuzeigen.

Auf dynamisch generierenden Unterseiten wird eine kurze Beschreibung, eine Bewertung, die unterstützen Platformen und weitere Screenshots angezeigt.

---

Die React Website ist zusammen mit einem `Nginx` Webserver via `Docker` zum deploy vorgesehen.

> Aktuell läuft die Seite [hier](http://h2911972.stratoserver.net:89/).

Um die Website bei sich selber zum Laufen zu bringen einfach das Git repository clonen und ein Terminal in dem entsprechenden Ordner öffnen. Außerdem sollte die neuste Version `node` installiert sein.

```bash
npm install
```

- um die benötigten `node modules` zu installieren

```bash
npm start
```

- um einen React-Development-Server auf `localhost:3000` laufen zu lassen.

---

Um den Docker Container zu bauen muss natürlich die Docker Engine installiert sein.

```bash
docker build -f Dockerfile.prod -t ignite .
```

Der Containername (`ignite`) ist natürlich frei wählbar.

```bash
docker run -d -p 80:80 --rm ignite
```

- `-d` um den Container im detach Modus zu starten
- `-p` die vordere Zahl (`80`:80) ist der Port deines Rechners, die hintere die des Nginx Webservers im Docker-Container
- `--rm` um den Container nach dem Stoppen direkt zu löschen

---
