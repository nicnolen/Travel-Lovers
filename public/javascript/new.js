const newFormHandler = async function (event) {
    event.preventDefault();

    const topic = document.querySelector('input[name="post-topic"]').value;
    const title = document.querySelector('input[name="post-title"]').value;
    const author = document.querySelector('input[name="post-author"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    const token = localStorage.getItem("token");
    await fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify({
            topic,
            title,
            author,
            body
        }),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    });

    document.location.replace("/dashboard");
};

document
    .querySelector("#new-post-form")
    .addEventListener("submit", newFormHandler);