import { Component } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  editorContent: string = ""; // Inicializa una variable para almacenar el contenido del editor
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    width: "100%",
    height: "50rem",
    minHeight: "5rem",
    placeholder: "Enter text here...",
    translate: "no",
    defaultParagraphSeparator: "p",
    defaultFontName: "Arial",
    toolbarHiddenButtons: [["bold"]],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: "redText",
        class: "redText",
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
  };
}
