import React from "react";
import Container from "./Container";

const About = props => {
  return (
    <Container>
      <div id="about">
        <h1 className="hero">Writing is thinking.</h1>

        <h4>
          <mark>To write well is to think clearly.</mark>
        </h4>

        <h4>
          Unfortunately, many forces stand in our way when we seek to write.
        </h4>

        <h4>
          Perhaps the most pernicious of these foes is the very act of taking
          time to do the deed. Our minds conjure endless tasks to lure us away:
          work emails await our reply, the kids need to be put to bed, the dog
          must go out.
        </h4>

        <h4>
          But if we could just carve out the time to write, we'd find ourselves
          creating the space to let our best thoughts unfold.
        </h4>

        <h4>
          Prosescript will help you clear those early barriers to writing by
          freeing you from a blog editor. This means you can write anywhere: a
          word processor, a mobile note-taking app, even an email draft. No
          matter where you write, Prosescript will accept your writing in an
          email and convert it into a Medium post.
        </h4>

        <h4>
          Ultimately, Prosescript is here to help you think better by making
          writing easier. All you need to{" "}
          <a className="href" href={props.signup}>
            get started
          </a>{" "}
          is a Medium account and an email address.
        </h4>

        <h1 className="hero">What's in a name?</h1>

        <h4>What sort of a name is Prosescript, anyway?</h4>

        <h4>
          Because we're writers, we couldn't resist the urge to gave our own
          name a double meaning.
        </h4>

        <h4>
          In Latin, <span className="italic">pro se</span> means "for oneself"
          and <span className="italic">scriptus</span> means "written." So
          Prosescript is writing for oneself. Since we believe writing is
          thinking, we want Prosescript to be a home for those who want to get
          their thoughts out into the world.
        </h4>

        <h4>
          In English, <span className="italic">prose</span> refers to "ordinary
          spoken or written language" and <span className="italic">script</span>{" "}
          is a "list of commands executed by a computer." In this sense,
          Prosescript is a computer program that renders your writing.
        </h4>

        <h4>
          For us, these two meanings encapsulate the core purpose of
          Prosescript. Our goal is to provide you with a tech tool that enables
          you to write for yourself by rendering your thinking into the world.
          Sign up{" "}
          <a className="href" href={props.signup}>
            here
          </a>{" "}
          or using the "Sign Up" button above!
        </h4>
      </div>
    </Container>
  );
};

export default About;
