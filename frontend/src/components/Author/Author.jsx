import React from "react";
import { AuthorContainer } from "./styles";

function Author() {
  return (
    <AuthorContainer>
      Created by{" "}
      <a href="https://github.com/Percobain" target="_blank" rel="noopener noreferrer">
        Shrey
      </a>
    </AuthorContainer>
  );
}

export default Author;