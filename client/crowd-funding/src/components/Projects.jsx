import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { publicRequest } from "../requestMethod";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../CSS/Icon.css";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 70px 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #c9366f;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 35px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  padding: 0px 15px;
`;

const Project = styled.div`
  background-color: white;
  position: relative;
  border-radius: 10px;
  height: 518.69px;
  width: 350.44px;
  display: flex;
  flex-direction: column;
  border: 0.5px solid lightgray;
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  }
  transition: all 0.7s ease;
`;

const ProjectImage = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 20px;
`;

const ProjectTag = styled.a`
  color: #c9366f;
  &:hover {
    color: #40bda5;
  }
  cursor: pointer;
  font-size: 14px;
`;

const ProjectTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`;

const ProjectFlex = styled.div`
  display: flex;
  padding: 10px 0px;
`;

const ProjectTagContainer = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #c9366f;
  }
  transition: all 0.3s ease;
`;

const ProjectProgessContainer = styled.div`
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
`;

const ProjectMoney = styled.div`
  font-size: 14px;
`;

const Progress = styled.div``;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #eee;
  border-radius: 20px;
  height: 6px;
  position: relative;
  margin: 10px 0px;
  &:before {
    content: attr(data-percentage);
    width: ${(props) => props.percentage || 0}%;
    left: 0;
    top: 0;
    bottom: 0;
    border-radius: 20px;
    background-color: #c9366f;
    display: flex;
    align-items: center;
    position: absolute;
    max-width: 100%;
    transition: all 1s ease;
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const ProgressNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Center = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TopText = styled.div`
  font-weight: 500;
  font-size: 20px;
  padding: 20px 0px 10px 0px;
`;

const BottomText = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #c9366f;
  padding-bottom: 10px;
`;

const Button = styled.button`
  font-weight: 700;
  text-transform: uppercase;
  color: #0275d8;
  padding: 18px 30px;
  border: 1px solid #c9366f;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 70px;
  &:hover {
    background-color: #c9366f;
    color: white;
  }
  transition: all 0.5s ease;
`;

const formatter = new Intl.NumberFormat(
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" })
);

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const today = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  const checkDay = (check) => {
    return check < 0 ? false : true;
  };
  useEffect(() => {
    const getCampaigns = async () => {
      try {
        const resCampaign = await publicRequest.get("/campaign");
        setCampaigns(resCampaign.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getCampaigns();
  }, []);
  const date = (day) => {
    return new Date(day);
  };
  return (
    <Container>
      <Title>Các dự án nổi bật</Title>
      <Desc>Những dự án nổi bật tại Comicola</Desc>
      {loading ? (
        <CircularProgress></CircularProgress>
      ) : (
        <ProjectsContainer>
          {campaigns.slice(0, 3).map((campaign) => (
            <ProjectContainer key={campaign.Id}>
              <Project>
                <Link
                  to={`/campaign/${campaign._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ProjectImage src={campaign.img} />
                </Link>
                <ProjectTitleContainer>
                  <ProjectFlex>
                    <ProjectTagContainer>
                      {campaign.tag.map((tag) => (
                        <ProjectTag key={tag}>{tag} </ProjectTag>
                      ))}
                    </ProjectTagContainer>

                    <FavoriteBorderIcon className="icon_home" />
                  </ProjectFlex>
                  <Link
                    to={`/campaign/${campaign._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ProjectTitle>{campaign.title}</ProjectTitle>
                  </Link>
                </ProjectTitleContainer>
                <ProjectProgessContainer>
                  <ProjectMoney>
                    {formatter.format(campaign.donatesum)} ₫ đã được ủng hộ
                  </ProjectMoney>
                  <Progress>
                    <ProgressBar
                      percentage={
                        (campaign.donatesum / campaign.donateneed) * 100
                      }
                    />
                  </Progress>
                  <Hr />
                  <ProgressNumberContainer>
                    <Left>
                      <TopText>
                        {checkDay(
                          Math.round(
                            (date(campaign.dayfinish) - today) / oneDay
                          )
                        ) === true
                          ? Math.round(
                              Math.abs(
                                (date(campaign.dayfinish) - today) / oneDay
                              )
                            )
                          : "0"}
                      </TopText>
                      <BottomText>Ngày còn lại</BottomText>
                    </Left>
                    <Center>
                      <TopText>{campaign.supporters}</TopText>
                      <BottomText>Người ủng hộ</BottomText>
                    </Center>
                    <Right>
                      <TopText>
                        {Math.round(
                          (campaign.donatesum / campaign.donateneed) * 100
                        )}
                        %
                      </TopText>
                      <BottomText>Thành công</BottomText>
                    </Right>
                  </ProgressNumberContainer>
                </ProjectProgessContainer>
              </Project>
            </ProjectContainer>
          ))}
        </ProjectsContainer>
      )}

      <Link to="/all-campaigns">
        <Button>Xem toàn bộ các dự án</Button>
      </Link>
    </Container>
  );
};

export default Projects;
