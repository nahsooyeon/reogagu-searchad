import React, { useState, useMemo } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";




function IndexPage() {
  const Now = new Date();

  const [EndDate, setEndDate] = useState<Date>(new Date(Now.getTime() - 24 * 60 * 60 * 1000));
  const [StartDate, setStartDate] = useState<Date>(new Date(EndDate.getTime() - 24 * 60 * 60 * 7 * 1000));
  const [Channel, setChannel] = useState('');

  /* 날짜 정보 설정 함수: 주간 데이터를 받아와야하므로 7일 텀으로 강제 설정 */
  const handleStartDateChange = (date: Date, _event: React.SyntheticEvent<any, Event>) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date: Date, _event: React.SyntheticEvent<any, Event>) => {
    setEndDate(date);
  };

  const ChannelOptions = useMemo(() => [
    { value: "naver", label: "네이버 검색광고" },
    { value: "kakao", label: "카카오 모먼트" }
  ],
    []
  );

  return (<>
    <div className="index-container">
      <h1>레오가구 - 네이버/카카오 광고 데이터 받아오기</h1>
      <input className="input-documentID" placeholder="데이터를 저장할 구글 스프레드시트의 URL을 입력하세요"></input>
      <div className="search-datepicker">
        <DatePicker selected={StartDate} onChange={() => handleStartDateChange} className="calendar start-date" />
        <DatePicker selected={EndDate} onChange={() => handleEndDateChange} className="calendar end-date" />
      </div>
      <Select options={ChannelOptions} defaultValue={ChannelOptions[0]} ></Select>
      <button className="btn-submit">데이터 저장하기</button>
    </div>
  </>);
}

export default IndexPage;
