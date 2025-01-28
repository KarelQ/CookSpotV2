package com.example.cookspot.controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class ImageController {

    private final String uploadDir = "C:/uploads"; // Ścieżka, w której przechowywane są zdjęcia

    @GetMapping("/img/{imageName}")
    public ResponseEntity<Resource> getImage(@PathVariable String imageName) {
        try {
            // Utwórz ścieżkę do pliku
            Path filePath = Paths.get(uploadDir).resolve(imageName);

            // Załaduj plik jako Resource
            Resource resource = new UrlResource(filePath.toUri());

            // Sprawdź, czy plik istnieje i jest czytelny
            if (!resource.exists() || !resource.isReadable()) {
                return ResponseEntity.notFound().build();
            }

            // Określ typ zawartości na podstawie rozszerzenia pliku
            String contentType = "image/jpeg"; // Domyślny typ
            if (imageName.endsWith(".png")) {
                contentType = "image/png";
            } else if (imageName.endsWith(".gif")) {
                contentType = "image/gif";
            }

            // Zwróć plik jako odpowiedź z odpowiednimi nagłówkami
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                    .body(resource);

        } catch (MalformedURLException e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
