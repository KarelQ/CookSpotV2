package com.example.cookspot.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api")
public class FileUploadController {

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(
            @RequestParam("file") MultipartFile file,
            @RequestParam("newFileName") String newFileName) {

        try {
            // Sprawdź, czy katalog istnieje, jeśli nie, utwórz go
            // Ścieżka zapisu plików
            String uploadDir = "C:/uploads/";
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Utwórz pełną ścieżkę do zapisu pliku
            Path filePath = uploadPath.resolve(newFileName);

            // Zapisz plik
            file.transferTo(filePath.toFile());

            return ResponseEntity.ok("Plik zapisany pomyślnie w: " + filePath.toString());
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Błąd podczas zapisu pliku: " + e.getMessage());
        }
    }
}
