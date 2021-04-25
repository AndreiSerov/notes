package ru.serov.notebooks.note

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class NoteService(@Autowired private val repository: NoteRepository) {
    fun getNotes(): MutableList<Note> {
        val data = repository.findAll()
        data.sortByDescending { it.id }
        return data
    }

    fun writeNote(note: Note) = repository.save(note)
    fun deleteNote(id: Long) = repository.deleteById(id)
}