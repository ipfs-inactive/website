---
pagetype: major
pagename: team
section: Team
title: The IPFS Team
url: team
save_as: team/index.html
constellation: constellation-02.svg
---

<p class="lead">
IPFS is the collective work of thousands of contributors from multiple geographies and backgrounds, working <a href="https://github.com/ipfs/team-mgmt#how-we-work-together">collaboratively and asynchronously</a> to decentralize the Web.
</p>

We organize ourselves into focused teams called Working Groups. Each group defines its own roadmap, objectives and priorities. You can find more information about this group structure in the [team management repo](https://github.com/ipfs/team-mgmt/blob/master/TEAMS_ROLES_STRUCTURES.md#working-groups).

The IPFS Working Groups are:

- [**Project Operations**](#project-operations)
- [**Testing Infra**](#testing-infra)
- [**IPFS as a Service**](#ipfs-as-a-service)
- [**Package Managers**](#package-managers)
- [**Docs and Developer UX**](#docs-and-developer-ux)


There are also Special Interest Groups, pushing forward research and development on:

- [**Integration with Web Browsers**](#integration-with-web-browsers)
- [**IPFS GUI**](#ipfs-gui)
<!-- - [**IPFS Cluster**](#ipfs-cluster) -->
- [**Local Offline Collaboration**](#local-offline-collaboration-locol)

<!-- - [**Dynamic Data and Capabilities**](#dynamic-data-and-capabilities)
- [**Decentralized Data Stewardship**](#decentralized-data-stewardship) -->


### Project Operations

Ensure core Go and JavaScript implementations ship with reliable rigor, systematize community communications and collaborations, and spin up IPFS research to meet future project needs.

**Responsibilities include**:

- Track progression of objectives and key results (OKRs) for core implementations (including [js-ipfs](https://github.com/ipfs/js-ipfs) and [go-ipfs](https://github.com/ipfs/js-ipfs))
- Project communications and community support
- Collaborations (including [with web browsers](https://github.com/ipfs/in-web-browsers))
- Maintenance of lower-priority systems/tools
- Research

Where to learn more:

- **Coordination**: https://github.com/ipfs/project-operations
- **Technical Project Manager/IPFS Project Lead**: [Molly Mackinlay](https://github.com/momack2)

### Testing Infra

The IPFS Testing Infra team builds testing tooling to validate scalability and reliability of the core IPFS implementations, with easy onboarding for core developers to use in CI and one-off testing.

**Responsibilities include**:

- Build large-scale testing infrastructure
- Create dashboards and CI hooks to make testing infra more useful/usable
- Support core implementation developers in creating/running real world test scenarios

Where to learn more:

- **Coordination**: TBD
- **Captain**: [Raul Kripalani](https://github.com/raulk)

### IPFS as a Service

Improve performance and stability of gateways and pinning, and provide public observability of services.

**Responsibilities include**:

- Manage and maintain the IPFS HTTP Gateway
- Manage and maintain the IPFS Bootstrapper nodes
- Manage and maintain the IPFS pinning service, [pinbot](https://twitter.com/ipfspin)
- Monitor services and hosts used by the IPFS dev teams
- Provide wisdom to other users that want to host IPFS nodes

Where to learn more:

- **Coordination**: TBD
- **Captain**: [Héctor Sanjuan](https://github.com/hsanjuan)

### Package Managers

User research, collaborations, and performance improvements of import and update of large filesystems to support file-system-based package managers.

**Responsibilities include**:

- Participate in communities like [package.community](http://package.community/)
- Conduct user research around package manager use cases, communities, and best practices
- Support collaborations between IPFS and community members who are building, maintaining and using package managers
- Research and prototype adding IPFS support to package manager clients and mirroring registries onto IPFS
- Improve the core IPFS implementations to support package manager usage needs

Where to learn more:

- **Coordination**: https://github.com/ipfs/package-managers
- **Captains**: [Steven Allen](https://github.com/stebalien) and [Michelle Hertzfeld](https://github.com/meiqimichelle)
- **Weekly call**
  - 🕒 Tuesdays at 15:30 UTC
  - 📞 Zoom: https://protocol.zoom.us/j/5011724290

### Docs and Developer UX

Overhaul our documentation platform and content based on audits, research and community needs assessment to make IPFS more accessible to developer users.

**Responsibilities include**:

- Support [ProtoSchool](http://proto.school) to improve broader understanding of the dweb
- Understand and support IPFS developer usability needs
- valuate and improve IPFS documentation accuracy, usability, and accessibility

Where to learn more:

- **Coordination**: https://github.com/ipfs/docs
- **Captain**: [Jessica Schilling](https://github.com/jessicaschilling)
- **Weekly call**
  - 🕒 Mondays at 15:00 UTC
  - 📞 Zoom: https://protocol.zoom.us/j/614386160

## Special Interest Groups

_Cross-cutting research and development teams_


### Integration with Web Browsers

The Integration with Web Browsers Special Interest Group designs and implements browser integrations, service workers and any other strategy that contributes to IPFS being integrated with the web today.

**Responsibilities include**:

- Browser integrations (Firefox, Chrome, Brave and others)
- Develop the [IPFS Companion](https://github.com/ipfs-shipyard/ipfs-companion) browser extension
- Develop the [IPFS Service Worker](https://github.com/ipfs-shipyard/service-worker-gateway)
- Collaborate with with browser vendors
- Identify blockers and design constraints of each integration, figuring out new ways to go around those limitations
- Increase the adoption of the distributed web by making it easy for users to access it
- Define specifications for address schemes and advocate for those schemes to be adopted

Where to learn more:

- **Coordination**: https://github.com/ipfs/in-web-browsers
- **Mailing List**: wb-wg@ipfs.io
- **Captain & Technical Project Manager**: [Marcin Rataj](https://github.com/lidel)
- **Weekly call**
  - 🕒 Wednesdays at 16:00 UTC
  - 📞 Zoom: https://protocol.zoom.us/j/833247793

### IPFS GUI

  Making IPFS GUIs simple, accessible, reusable, and beautiful.

  **Responsibilities include**:

  - Fight complexity at every step
  - IPFS must be usable and comprehensible for everyone
  - Publish and promote this work; make doing the right thing the easiest thing
  - Demonstrate the nature of the system with effortless, coherent, and compelling interfaces

  Where to learn more:

  - **Coordination**: https://github.com/ipfs/ipfs-gui
  - **Mailing List**: gui-wg@ipfs.io
  - **Captain**: [Oli Evans](https://github.com/olizilla)
  - **Weekly call**
    - 🕒 Wednesdays at 16:00 UTC
    - 📞 Zoom: https://protocol.zoom.us/j/833247793


### Local Offline Collaboration (Locol)

User research, collaborations, and features to make the knowledge and tools on the internet accessible and useful on partitioned, low-bandwidth, or intermittent networks.

**Responsibilities include**:

- Participate in communities like [Offline First](http://offlinefirst.org/)
- Conduct user research around offline and local-first use cases, communities, and best practices
- Support collaborations between IPFS and community members who are building tools for peer-to-peer sharing and collaboration in local/offline networks
- Research and prototype applications that utilize IPFS for local-first collaboration and resilient offline usage

Where to learn more:

- **Coordination**: https://github.com/ipfs/local-offline-collab
- **Mailing List**: locol-wg@ipfs.io
- **Monthly call**
  - 🕒 Every third Wednesday at 17:00 UTC
  - 📞 Zoom: https://protocol.zoom.us/j/884541689
