export const getAllNotes = () =>
    fetch('http://localhost:8080/api/v1/note')


export const addNewNote = note =>
    fetch('http://localhost:8080/api/v1/note', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(note)
    })

/*
export const updateStudent = (studentId, note) =>
    fetch(`api/students/${studentId}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(note)
    })
        .then(checkStatus);

export const deleteStudent = studentId =>
    fetch(`api/students/${studentId}`, {
        method: 'DELETE'
    })
        .then(checkStatus);*/

/*
const checkStatus = response => {
    if (response.ok) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        response.json().then(e => {
            error.error = e;
        });
        return Promise.reject(error);
    }
}
*/
