const markdown = {
  hideContents: {
    // '& #methods': {
    //   display: 'none',
    //   '&+ul': {
    //     display: 'none',
    //   },
    // },
  },
  markdown: {
    '& pre': {
      display: 'inline-block',
      maxWidth: '100%',
      overflow: 'auto',
      boxShadow: [[3, 3, 25, '#000'], [0, 0, 20, '#001e36', 'inset']],
      border: [1, 'solid', '#001e36'],
      background: '#192e40',
      color: '#FFF',
      padding: 20,
    },
    '& .hljs': {
      background: '#192e40',
      padding: 0,
      overflow: 'visible',
    },
    '& .hljs-comment': {
      color: '#3bffcc',
    },
    '&::-webkit-scrollbar': {
      width: 6,
      height: 6,
    },
    '&::-webkit-scrollbar-button': {
      width: 0,
      height: 0,
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#0078dc',
      border: [0, 'none', '#ffffff'],
      borderRadius: 50,
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#44aaff',
    },
    '&::-webkit-scrollbar-thumb:active': {
      background: '#6dbdff',
    },
    '&::-webkit-scrollbar-track': {
      background: '#192e40',
      border: [0, 'none', '#ffffff'],
      borderRadius: 50,
    },
    '&::-webkit-scrollbar-track:hover': {
      background: '#192e40',
    },
    '&::-webkit-scrollbar-track:active': {
      background: '#192e40',
    },
    '&::-webkit-scrollbar-corner': {
      background: 'transparent',
    },
  },
};

for (let hs = 1; hs < 7; hs++) {
  markdown.markdown[`& h${hs}`] = {
    '& a': {
      '& i.material-icons': {
        transform: `translateY(${2 + hs}px)`,
        marginRight: 2 + hs,
        fontSize: 24 - hs,
      },
    },
  };
}
export default markdown;
