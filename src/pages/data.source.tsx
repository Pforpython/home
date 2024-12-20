import logoImage from "../assets/Innovate_Future_logo-white.png";
import copyrightLogo from "../assets/IFF_logo-white.png";
import aaitLogo from "../assets/AAIT_logo.png";
import awsStartupLogo from "../assets/AWS_startups_logo.png";
import awsLogo from "../assets/AWS_logo.png";

export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: "header2 home-page-wrapper jrhtw9ph4a-editor_css" },
  page: { className: "home-page" },
  logo: {
    className: "header2-logo",
    children: logoImage,
  },
  LinkMenu: {
    className: "header2-menu",
    children: [
      {
        name: "linkNav",
        to: "About_0",
        children: "About",
        className: "menu-item",
      },
      {
        name: "linkNav",
        to: "Content9_0",
        children: "Events",
        className: "menu-item",
      },
    ],
  },
  mobileMenu: { className: "header2-mobile-menu" },
  Menu: {
    children: [
      {
        name: "Banner3_0",
        to: "Banner3_0",
        children: "首页",
        className: "active menu-item",
      },
      {
        name: "Content8_0",
        to: "Content8_0",
        children: "特邀嘉宾",
        className: "menu-item",
      },
      {
        name: "Content9_0",
        to: "Content9_0",
        children: "会议日程",
        className: "menu-item",
      },
      {
        name: "Content10_0",
        to: "Content10_0",
        children: "大会地址",
        className: "menu-item",
      },
      {
        name: "Content11_0",
        to: "Content11_0",
        children: "展台展示",
        className: "menu-item",
      },
      {
        name: "Content12_0",
        to: "Content12_0",
        children: "特别鸣谢",
        className: "menu-item",
      },
    ],
  },
};
export const Banner30DataSource = {
  wrapper: { className: "banner3" },
  textWrapper: {
    className: "banner3-text-wrapper",
    children: [
      {
        name: "nameEn",
        className: "banner3-name-en",
        children: "Seeking Experience & Engineering Conference",
      },
      {
        name: "slogan",
        className: "banner3-slogan",
        children: "AWS GenAI Professional Development",
        texty: true,
      },
      {
        name: "name",
        className: "banner3-name",
        children: "Empowering Innovation, Shaping the Future",
      },
      { name: "button", className: "banner3-button", children: "Register Now" },
      {
        name: "time",
        className: "banner3-time",
        children: "06.12.2024 / Sydney, Australia",
      },
    ],
  },
};
export const Content80DataSource = {
  wrapper: { className: "home-page-wrapper content8-wrapper" },
  page: { className: "home-page content8" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      { name: "title", children: "Speaker Showcase", className: "title-h1" },
    ],
  },
  block: {
    className: "content-wrapper",
    children: [
      {
        name: "block0",
        md: 6,
        xs: 24,
        className: "content8-block-wrapper",
        children: {
          className: "content8-block",
          img: {
            className: "content8-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png",
          },
          title: { className: "content8-title", children: "Navi Kaur" },
          content: {
            className: "content8-content",
            children: "Tech Leader @Amazon",
          },
        },
      },
      {
        name: "block1",
        md: 6,
        xs: 24,
        className: "content8-block-wrapper",
        children: {
          className: "content8-block",
          img: {
            className: "content8-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png",
          },
          title: { className: "content8-title", children: "Johnny Zhao" },
          content: {
            className: "content8-content",
            children: "公司+职位 @AWS",
          },
        },
      },
      {
        name: "block2",
        md: 6,
        xs: 24,
        className: "content8-block-wrapper",
        children: {
          className: "content8-block",
          img: {
            className: "content8-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png",
          },
          title: { className: "content8-title", children: "Jason Ren" },
          content: {
            className: "content8-content",
            children: "公司+职位 @AWS",
          },
        },
      },
      {
        name: "block3",
        md: 6,
        xs: 24,
        className: "content8-block-wrapper",
        children: {
          className: "content8-block",
          img: {
            className: "content8-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png",
          },
          title: { className: "content8-title", children: "Dexter Zhang" },
          content: {
            className: "content8-content",
            children: "公司+职位 @Amazon",
          },
        },
      },
      {
        name: "block4",
        md: 6,
        xs: 24,
        className: "content8-block-wrapper",
        children: {
          className: "content8-block",
          img: {
            className: "content8-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png",
          },
          title: { className: "content8-title", children: "Chuhao Liu" },
          content: {
            className: "content8-content",
            children: "Sunflower AI",
          },
        },
      },
      {
        name: "block5",
        md: 6,
        xs: 24,
        className: "content8-block-wrapper",
        children: {
          className: "content8-block",
          img: {
            className: "content8-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png",
          },
          title: { className: "content8-title", children: "Shawn" },
          content: {
            className: "content8-content",
            children: "Bookwell AI",
          },
        },
      },
      {
        name: "block6",
        md: 6,
        xs: 24,
        className: "content8-block-wrapper",
        children: {
          className: "content8-block",
          img: {
            className: "content8-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png",
          },
          title: { className: "content8-title", children: "Kris" },
          content: {
            className: "content8-content",
            children: "Beequant AI",
          },
        },
      },
      {
        name: "block7",
        md: 6,
        xs: 24,
        className: "content8-block-wrapper",
        children: {
          className: "content8-block",
          img: {
            className: "content8-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png",
          },
          title: { className: "content8-title", children: "Daniel" },
          content: {
            className: "content8-content",
            children: "Revelance AI",
          },
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: "home-page-wrapper content9-wrapper" },
  page: { className: "home-page content9" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      { name: "title", children: "会议日程", className: "title-h1" },
    ],
  },
  block: {
    className: "timeline",
    children: [
      {
        name: "block0",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg",
          },
          name: { className: "block-name", children: "" },
          post: { className: "block-post", children: "AWS" },
          time: { className: "block-time", children: "16:30 - 17:00" },
          title: {
            className: "block-title",
            children: "Doors Open, Signing in",
          },
          content: { className: "block-content", children: "" },
        },
      },
      {
        name: "block1",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg",
          },
          name: { className: "block-name", children: "" },
          post: { className: "block-post", children: "AWS" },
          time: { className: "block-time", children: "17:00 - 17:30" },
          title: { className: "block-title", children: "Opening Notes" },
          content: {
            className: "block-content",
            children:
              "This initiative will connect AWS with emerging talent, emphasizing AWS’s community-focused role and leadership in technology. By featuring AWS’s GenAI stack, cloud technologies, and the AWS Startup program, this series highlights AWS’s dedication to innovation, diversity, and inclusion, specifically supporting the Asian community in tech.",
          },
        },
      },
      {
        name: "block2",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg",
          },
          name: { className: "block-name", children: "Navi Kaur" },
          post: { className: "block-post", children: "AWS" },
          time: { className: "block-time", children: "17:30 - 18:00" },
          title: {
            className: "block-title",
            children: "Level 100- mapping to AI certification",
          },
          content: {
            className: "block-content",
            children: "AWS AI Certification roadmap",
          },
        },
      },
      {
        name: "block3",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: { className: "block-name", children: "Jason Ren" },
          post: { className: "block-post", children: "BD" },
          time: { className: "block-time", children: "18:00 - 18:30" },
          title: {
            className: "block-title",
            children: "AWS Startup Program Introduction",
          },
          content: {
            className: "block-content",
            children: "",
          },
        },
      },
      {
        name: "block3",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: { className: "block-name", children: "" },
          post: { className: "block-post", children: "AWS" },
          time: { className: "block-time", children: "18:30 - 19:00" },
          title: {
            className: "block-title",
            children: "AWS Startup Company Pitch",
          },
          content: {
            className: "block-content",
            children:
              "Sunflower AI, BookWell AI, Innov AI Solutions, Relevance AI, Beequant AI",
          },
        },
      },
      {
        name: "block3",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: { className: "block-name", children: "" },
          post: { className: "block-post", children: "AWS" },
          time: { className: "block-time", children: "19:00 - 20:30" },
          title: { className: "block-title", children: "Networking and Pizza" },
          content: {
            className: "block-content",
            children: "Networking, Music, Pizza",
          },
        },
      },
      {
        name: "block4",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: { className: "block-name", children: "" },
          post: { className: "block-post", children: "AWS" },
          time: { className: "block-time", children: "20:30 - 21:00" },
          title: { className: "block-title", children: "Lightning Talks" },
          content: {
            className: "block-content",
            children: "Speaker Lists",
          },
        },
      },
    ],
  },
};
export const Content100DataSource = {
  wrapper: { className: "home-page-wrapper content10-wrapper" },
  Content: {
    className: "icon-wrapper",
    children: {
      icon: {
        className: "icon",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg",
        name: "主要图标",
      },
      iconShadow: {
        className: "icon-shadow",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg",
        name: "图标影阴",
      },
      url: {
        children: "https://maps.app.goo.gl/dVJxuwYMU3UqBMgc6",
        name: "跳转地址",
      },
      title: { children: "Location", name: "弹框标题" },
      content: {
        children: "Amazon Office, Sydney",
        name: "弹框内容",
      },
    },
  },
};
export const Content110DataSource = {
  OverPack: {
    className: "home-page-wrapper content11-wrapper",
    playScale: 0.3,
  },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      { name: "title", children: "Sign up here", className: "title-h1" },
      {
        name: "content",
        children:
          "Reserve your spot today and celebrate the end of 2024 with a glimpse into the future of AI and cloud technology",
        className: "title-content",
      },
      {
        name: "content2",
        children: "现场问诊，为你答疑解难",
        className: "title-content",
      },
    ],
  },
  button: {
    className: "button-wrapper",
    children: {
      a: {
        className: "button",
        href: "https://jiangren.com.au/events/6728737dabe9440012e505bc",
        children: "Sign Up Now",
        name: "button",
        target: "_blank",
      },
    },
  },
};
export const Content120DataSource = {
  wrapper: { className: "home-page-wrapper content12-wrapper" },
  page: { className: "home-page content12" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      { name: "title", children: "Partners", className: "title-h1" },
    ],
  },
  block: {
    className: "img-wrapper",
    children: [
      {
        name: "block0",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: aaitLogo,
          },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: awsStartupLogo,
          },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children: awsLogo,
          },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg",
          },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg",
          },
        },
      },
      {
        name: "block5",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg",
          },
        },
      },
    ],
  },
};
export const Footer20DataSource = {
  wrapper: { className: "home-page-wrapper footer2-wrapper" },
  OverPack: { className: "home-page footer2", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: [
      {
        name: "image",
        children: copyrightLogo,
        className: "copyright-logo",
      },
      {
        name: "group",
        children: "Innovate Future Association",
        className: "copyright-group",
      },
      {
        name: "image2",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/fgGmQUfiUfSBfvsQpfOj.svg",
        className: "copyright-line",
      },
      {
        name: "copyright",
        children: "Copyright © Innovate Future Association",
        className: "copyright-text",
      },
    ],
  },
};
export const AboutDataSource = {
  title: "Innovate Future Association",
  children: [
    {
      title: "Professional Development",
      content:
        "Delivering workshops, mentorship programs, and networking events through industry partnerships",
      src:
        "https://gw.alipayobjects.com/zos/rmsportal/KtRzkMmxBuWCVjPbBgRY.svg",
      color: "#1890FF",
      shadowColor: "rgba(24, 144, 255, 0.08)",
      link: "#professional-development",
    },
    {
      title: "Knowledge Exchange",
      content:
        "Partnering with technology companies to create platforms for industry experts",
      src:
        "https://gw.alipayobjects.com/zos/rmsportal/qIcZMXoztWjrnxzCNTHv.svg",
      color: "#52C41A",
      shadowColor: "rgba(82, 196, 26, 0.08)",
      link: "#knowledge-exchange",
    },
    {
      title: "Customized Programs",
      content:
        "Developing targeted programs focusing on current skills and industry trends",
      src:
        "https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg",
      color: "#F5222D",
      shadowColor: "rgba(245, 34, 45, 0.08)",
      link: "#customized-programs",
    },
    {
      title: "Educational Workshops",
      content:
        "Offering diverse workshops covering programming, entrepreneurship, and more",
      src:
        "https://raw.githubusercontent.com/microsoft/fluentui-system-icons/master/assets/Book/SVG/ic_fluent_book_24_regular.svg",
      color: "#722ED1",
      shadowColor: "rgba(114, 46, 209, 0.08)",
      link: "#educational-workshops",
    },
    {
      title: "Community Building",
      content:
        "Strengthening connections between Chinese and local tech communities",
      src:
        "https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg",
      color: "#FA8C16",
      shadowColor: "rgba(250, 140, 22, 0.08)",
      link: "#community-building",
    },
  ],
};
