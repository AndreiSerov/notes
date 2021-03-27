package ru.serov.notebooks.note

import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.time.LocalDateTime

@Configuration
class NoteConfig {

    @Bean
    fun commandLineRunner(repository: NoteRepository) = CommandLineRunner {
        repository.saveAll(
            listOf(
                Note(1, "First", "My first Note"),
                Note(2, "Second", "My second note", LocalDateTime.now())
            )
        )
    }

}