import React, { useState } from "react";
import { Table, Button } from "semantic-ui-react";

// Components
import InfosModal from "./InfosModal.jsx";

const AllArtEval = (props) => {
  // props

  // states
  // const [Data, setData] = useState("");

  const data = [
    {
      title: "Article 1",
      theme: "Theme 1",
      conf: "Confrer 1",
      cher: "Chercheur 1",
      src: "pdf1.pdf",
      resume:
        "Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet,",
    },
    {
      title: "Article 2",
      theme: "Theme 2",
      conf: "Confrer 2",
      cher: "Chercheur 2",
      src: "pdf2.pdf",
      resume:
        "Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet,",
    },
    {
      title: "Article 3",
      theme: "Theme 3",
      conf: "Confrer 3",
      cher: "Chercheur 3",
      src: "pdf4.pdf",
      resume:
        "Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet,",
    },
    {
      title: "Article 4",
      theme: "Theme 4",
      conf: "Confrer 4",
      cher: "Chercheur 4",
      src: "pdf4.pdf",
      resume:
        "Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet,",
    },
    {
      title: "Article 1",
      theme: "Theme 1",
      conf: "Confrer 1",
      cher: "Chercheur 1",
      src: "pdf1.pdf",
      resume:
        "Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet,",
    },
    {
      title: "Article 1",
      theme: "Theme 1",
      conf: "Confrer 1",
      cher: "Chercheur 1",
      src: "pdf1.pdf",
      resume:
        "Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet,",
    },
    {
      title: "Article 1",
      theme: "Theme 1",
      conf: "Confrer 1",
      cher: "Chercheur 1",
      src: "pdf1.pdf",
      resume:
        "Lorem ipsum dolor sit am dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet,",
    },
    {
      title: "Article 1",
      theme: "Theme 1",
      conf: "Confrer 1",
      cher: "Chercheur 1",
      src: "pdf1.pdf",
      resume:
        "Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet,",
    },
    {
      title: "Article 1",
      theme: "Theme 1",
      conf: "Confrer 1",
      cher: "Chercheur 1",
      src: "pdf1.pdf",
      resume:
        "Lorem ipsum dolor sit amet, adipiscing. Lorem dhjsqjdh hdjsqhdj kkjqskdl ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet,",
    },
  ];

  return (
    <Table className="_data_table" striped>
      <Table.Header>
        <Table.HeaderCell content="Titre" />
        <Table.HeaderCell content="Theme" />
        <Table.HeaderCell content="Conference" />
        <Table.HeaderCell content="Chercheur" />
        <Table.HeaderCell content="Edit" width={2} />
      </Table.Header>
      <Table.Body>
        {data.map((elm, index) => {
          return (
            <Table.Row key={index}>
              <Table.Cell content={elm.title} />
              <Table.Cell content={elm.theme} />
              <Table.Cell content={elm.conf} />
              <Table.Cell content={elm.cher} />
              <Table.Cell>
                <InfosModal
                  data={elm}
                  fields={[
                    { text: "Titre :", field: "title" },
                    { text: "Theme :", field: "theme" },
                    { text: "Conference :", field: "conf" },
                    { text: "Chercheur :", field: "cher" },
                    { text: "PDF file :", field: "src" },
                    { text: "Resume :", field: "resume" },
                  ]}
                  trigger={
                    <Button icon={{ name: "info" }} className="shadow" />
                  }
                />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default AllArtEval;
