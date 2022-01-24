const generateTitle = titleText => {
    if (!titleText) {
        return ''
    }

    return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${titleText}</p>
    </section>
    `
}