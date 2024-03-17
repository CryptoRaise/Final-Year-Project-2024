import React from 'react'
import Faq from 'react-faq-component';

const data = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "What is the package version",
        content: "v1.0.5"
      }]
  }

const FAQ = () => {
  return (
    <div>
        <Faq data={data}
            styles={{
        bgColor: "#F7F2F2",
        titleTextColor: "#475569",
        rowTitleColor: "#64748b",
        rowTitleTextSize: 'large',
        rowContentColor: "#94a3b8",
        rowContentTextSize: '16px',
        rowContentPaddingTop: '10px',
        rowContentPaddingBottom: '10px',
        rowContentPaddingLeft: '30px',
        rowContentPaddingRight: '150px',
        arrowColor: "black",
        }} 
        />
    </div>
  )
}

export default FAQ