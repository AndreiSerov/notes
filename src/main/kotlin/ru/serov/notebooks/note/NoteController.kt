package ru.serov.notebooks.note

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping(path = ["/api/v1/note"])
class NoteController(@Autowired private val service: NoteService) {

    @GetMapping
    fun getNotes(): List<Note> = service.getNotes()

    @PostMapping
    fun writeNote(@RequestBody note: Note) = service.writeNote(note)
}