import React, { Component } from 'react';
import Container from "../component/Container"
import Head from 'next/head'

class JobsPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Job Website</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous" />
        </Head>
        <div>
          <Container />
        </div>
      </div>
    )
  }
}

export default JobsPage;
