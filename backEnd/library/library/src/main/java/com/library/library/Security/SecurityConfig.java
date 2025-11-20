package com.library.library.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
        return httpSecurity
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/user/login").permitAll()
                        .requestMatchers("/api/user/signup").permitAll()
                        .requestMatchers("/api/review/get/{bookName}").permitAll()
                        .requestMatchers("/api/review/save").permitAll()
                        .requestMatchers("/api/review/count").permitAll()
                        .requestMatchers("/api/review/getall").permitAll()
                        .requestMatchers("/api/review/deleteall").permitAll()
                        .requestMatchers("/api/review/delete/{id}").permitAll()
                        .requestMatchers("/api/book/save").permitAll()
                        .requestMatchers("/api/book/delete").permitAll()
                        .requestMatchers("/api/book/get").permitAll()
                        .anyRequest().authenticated()
                )
                .httpBasic(Customizer.withDefaults())
                .build();
    }

}