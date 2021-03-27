package ru.serov.notebooks.note

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

// DAL
@Repository
interface NoteRepository : JpaRepository<Note, Long> {

}