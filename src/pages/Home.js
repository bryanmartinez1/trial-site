export default function Home() {
  return (
    <body>
      <h1>
        <span>Form Input</span> Samples
      </h1>
      <p>Intro/JS</p>

      <article class="reg">
        {" "}
        <h2>Textbook</h2>
        <label for="tbuser">Username:</label>
        <input
          type="text"
          id="tbuser"
          placeholder="Enter Username"
          maxLength="10"
        ></input>
      </article>
    </body>
  );
}
