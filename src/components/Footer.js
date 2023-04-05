export default function Footer() {
  return (
    <div className=" text-xs my-5">
      <p>
        This project was coded by{" "}
        <a
          className="text-orange"
          href="https://www.shecodes.io/graduates/68429-seneng-utami"
          target="_blank"
          rel="noreferrer"
        >
          Seneng Utami
        </a>{" "}
        this app is{" "}
        <a
          className="text-orange"
          href="https://github.com/senengutami/seneng-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>{" "}
        and{" "}
        <a
          className="text-orange"
          href="https://loquacious-kangaroo-d3e0b0.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
