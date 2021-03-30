package ru.serov.notebooks.note

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class NoteService(@Autowired private val repository: NoteRepository) {
    fun getNotes(): MutableList<Note> = repository.findAll()
    fun writeNote(note: Note) = repository.save(note)
    fun deleteNote(id: Long): Any = repository.deleteById(id)
}