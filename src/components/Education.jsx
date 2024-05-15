import React, { Suspense, lazy } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Timeline from "highcharts/modules/timeline";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

Timeline(Highcharts);

const Education = () => {
  const options = {
    chart: {
      type: "timeline",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    accessibility: {
      screenReaderSection: {
        beforeChartFormat:
          "<h5>{chartTitle}</h5>" +
          "<div>{typeDescription}</div>" +
          "<div>{chartSubtitle}</div>" +
          "<div>{chartLongdesc}</div>" +
          "<div>{viewTableButton}</div>",
      },
      point: {
        valueDescriptionFormat: "{index}. {point.label}. {point.description}.",
      },
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    colors: ["#FFD300", "#F9A602", "#CC7722"],
    series: [
      {
        data: [
          {
            name: "Secondary School Certificate - 2009-2015",
            description: "Gujrati National High School, Gondia, Maharashtra",
          },
          {
            name: "Higher Secondary School Certificate - 2015-2017",
            description: "S. M. Patel Junior College, Gondia, Maharashtra",
          },
          {
            name: "Bachelor of Engineering - 2017-2021",
            description:
              "Yeshwantrao Chavan College of Engineering, Nagpur, Maharashtra",
          },
        ],
      },
    ],
  };

  const [setRef, isIntersecting] = useIntersectionObserver({
    root: null, // Use the viewport as root
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div ref={setRef} style={{ minHeight: "100vh" }}>
      {isIntersecting && (
        <Suspense fallback={<div>Loading...</div>}>
          <div className="bg-gradient-to-b to-darkBlueBg from-lightDarkBlueBg overflow-hidden relative">
            <div className="h-screen w-full flex flex-col justify-center items-center">
              <div className="text-5xl sm:text-8xl font-bold">EDUCATION</div>
              <div className="rounded-lg shadow-lg p-10 w-full">
                <HighchartsReact highcharts={Highcharts} options={options} />
              </div>
            </div>
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default Education;
