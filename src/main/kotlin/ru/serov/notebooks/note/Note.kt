package ru.serov.notebooks.note

import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table
data class Note(
    @Id
    @SequenceGenerator(
        name = "note_sequence",
        sequenceName = "note_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "note_sequence"
    )
    val id: Long? = null,
    val header: String? = null,
    val body: String? = null,
    @CreationTimestamp
    val createDate: LocalDateTime? = null,
    @UpdateTimestamp
    val updateDateTime: LocalDateTime? = null
)



