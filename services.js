module.exports = [
  {
    name: 'web',
    repo: 'https://github.com/overleaves/web.git',
    version: 'master',
  },
  {
    name: 'real-time',
    repo: 'https://github.com/overleaves/real-time.git',
    version: 'master',
  },
  {
    name: 'document-updater',
    repo: 'https://github.com/overleaves/document-updater.git',
    version: 'master',
  },
  {
    name: 'clsi',
    repo: 'https://github.com/overleaves/clsi.git',
    version: 'master',
  },
  {
    name: 'filestore',
    repo: 'https://github.com/overleaves/filestore.git',
    version: 'master',
  },
  {
    name: 'track-changes',
    repo: 'https://github.com/overleaves/track-changes.git',
    version: 'master',
  },
  {
    name: 'docstore',
    repo: 'https://github.com/overleaves/docstore.git',
    version: 'master',
  },
  {
    name: 'chat',
    repo: 'https://github.com/overleaves/chat.git',
    version: 'master',
  },
  {
    name: 'spelling',
    repo: 'https://github.com/overleaves/spelling.git',
    version: 'master',
  },
  {
    name: 'contacts',
    repo: 'https://github.com/overleaves/contacts.git',
    version: 'master',
  },
  {
    name: 'notifications',
    repo: 'https://github.com/overleaves/notifications.git',
    version: 'master',
  },
]

if (require.main === module) {
  for (const service of module.exports) {
    console.log(service.name)
  }
}
