figma.showUI(__html__, { width: 400, height: 500 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'fetch-github') {
    try {
      const response = await fetch(`https://api.github.com/repos/${msg.owner}/${msg.repo}/contents/${msg.path}`, {
        headers: {
          'Authorization': `token ${msg.token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      
      const data = await response.json();
      const content = atob(data.sha);
      
      figma.ui.postMessage({
        type: 'github-content',
        content: content
      });
    } catch (error) {
      figma.ui.postMessage({
        type: 'error',
        message: error.message
      });
    }
  }
  
  if (msg.type === 'update-github') {
    try {
      const response = await fetch(`https://api.github.com/repos/${msg.owner}/${msg.repo}/contents/${msg.path}`, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${msg.token}`,
          'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
          message: msg.commitMessage,
          content: btoa(msg.content),
          sha: msg.sha
        })
      });
      
      const data = await response.json();
      figma.ui.postMessage({
        type: 'github-updated',
        data: data
      });
    } catch (error) {
      figma.ui.postMessage({
        type: 'error',
        message: error.message
      });
    }
  }
}; 