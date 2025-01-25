package com.example.cookspot.exception;


import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/**").permitAll()
                        .requestMatchers(
                                "/volunteer/**",
                                "/api/project/join/**",
                                "/api/volunteer/**",
                                "/api/task/**").hasRole("VOLUNTEER")
                        .requestMatchers(
                                "/organisation/**",
                                "/api/task/**",
                                "/api/tag/**",
                                "/api/volunteer/**").hasRole("ORGANISATION")
                        .anyRequest().authenticated()
                ).formLogin(form -> form
                        .loginPage("/login")
                        .permitAll())
                .sessionManagement(session -> session
                        .maximumSessions(1)

                );

        http.csrf(AbstractHttpConfigurer::disable);


        return http.build();
    }
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Zezwalaj na wszystkie ścieżki
                        .allowedOrigins("http://localhost:3000") // Domena front-endu (React)
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Metody HTTP
                        .allowedHeaders("*") ;// Nagłówki

            }
        };
    }
}

