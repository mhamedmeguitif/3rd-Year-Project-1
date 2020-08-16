/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { Card, Pagination, Button } from "semantic-ui-react";
import Axios from "axios";
import { UserContext } from "../../../Config__Global/UserContext";

// css
import "./AllmyArticles.css";
import { Link } from "react-router-dom";

const AllmyArticles = (props) => {
  // props

  // states
  const [Data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setpages] = useState(1);
  const { user, setUser } = useContext(UserContext);

  // methods
  const handle_page = (e, { activePage }) => {
    setPage(activePage);
  };
  const getData = () => {
    const params = { page };
    if (!props.evaluate) {
      params["IdChercheur"] = user.id;
    }
    Axios.get("http://127.0.0.1:3000/Article", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      params,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
  useEffect(() => {
    getData();
  }, [page]);
  return (
    <div className="_articles">
      {props.evaluate && (
        <a
          href="/profile/articles/evaluate"
          type="button"
          className="btn btn-danger"
          style={{ color: "white", width: "fit-content", marginLeft: "25px" }}
        >
          Workspace
        </a>
      )}
      <div className="_articles_grid">
        {data.map((elm, index) => {
          return (
            <Card key={index}>
              <Card.Content>
                <Card.Header
                  content={elm.title}
                  textAlign="left"
                  style={{ marginBottom: ".25em" }}
                />
                <Card.Meta content={elm.cher} textAlign="left" />
              </Card.Content>
              <Card.Content
                description={elm.resume}
                className="_article_desc"
              />
            </Card>
          );
        })}
      </div>
      <Pagination
        className="_articles_pagination"
        lastItem={null}
        firstItem={null}
        totalPages={1}
        activePage={page}
        onPageChange={handle_page}
      />
    </div>
  );
};

export default AllmyArticles;
