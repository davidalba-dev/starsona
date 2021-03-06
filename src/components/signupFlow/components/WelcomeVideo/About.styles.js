import styled from 'styled-components';
import { media } from '../../../../styles/mediaQueries';

export const Layout = styled.section`
  width: 100%;
  max-width: 321px;
  margin: 0 auto;
  ${media.webView} {
    max-width: 480px;
  }
  @media (max-width: 320px) {
    padding: 0 15px;
  }
  .head1 {
    font-family: Gilroy-SemiBold;
    font-size: 24px;
    text-align: center;
    color: #7c7c7c;
    padding-top: 25px;
    @media (max-width: 831px) {
      display: none;
    }
    @media (min-width: 832px) {
      padding-bottom: 0;
    }
    @media screen and (min-width: 832px) and (max-height: 720px) {
      display: none;
    }
  }
  .note {
    font-family: Gilroy;
    font-size: 14px;
    text-align: center;
    color: #7c7c7c;
    padding-top: 8px;
    max-width: 430px;
    margin: 0 auto;
    line-height: 19px;
    @media (max-width: 831px) {
      max-width: 315px;
      line-height: 19px;
    }
    @media screen and (min-width: 832px) and (max-height: 720px) {
      padding-top: 34px;
    }
  }
  .questionWrapper {
    max-width: 239px;
    ${media.webView} {
      max-width: 410px;
    }
  }
  .button-wrapper {
    padding-bottom: 12px;

    &.no-support-btn-abt {
      ${media.webView} {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 51px;
        padding-bottom: 0;
      }
      @media screen and (min-width: 832px) and (max-height: 720px) {
        bottom: 0;
      }
    }
  }
  .skip {
    display: block;
    width: 100%;
    text-align: center;
    color: #615195;
    cursor: pointer;
    font-family: Gilroy;
    font-size: 14px;
    padding-bottom: 20px;
    @media screen and (min-width: 832px) and (max-height: 720px) {
      padding-bottom: 0;
    }
  }
`;

export const QuesWrapper = styled.section`
  margin: 0 auto;
  border-radius: 20px;
  background: #f8f8f8;
  overflow: hidden;
  margin-top: 43px;
  padding: 23px 29px 7px;
  margin-bottom: 13px;
  ${media.webView} {
    margin-top: 17px;
    margin-bottom: 26px;
  }
  @media (max-width: 831px) {
    margin-top: 8px;
    padding-bottom: 3px;
  }
  .question {
    color: #7c7c7c;
  }
  .queHead {
    text-align: left;
    color: #46829a;
    font-size: 18px;
    font-family: Gilroy;
    margin-bottom: 19px;
    @media (max-width: 831px) {
      text-align: center;
      margin-bottom: 14px;
    }
  }
`;
Layout.MainText = styled.p`
max-width: 430px;
margin-top: 20px;
font-family: Gilroy;
&.section-1 {
  @media (min-width: 832px) {
    margin-top: 62px;
  }
}

`;
Layout.Suggestions = styled.section`
  margin-top: 15px;
  margin-bottom: 95px;
  @media (max-width: 831px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 832px) and (max-height: 720px) {
    margin-bottom: 80px;
  }
`;
