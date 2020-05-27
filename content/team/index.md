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

- [**Project**](#project)
- [**Content Routing**](#content-routing)
- [**Testground**](#testground)
- [**Ecosystem**](#ecosystem)

There are also Special Interest Groups, pushing forward research and development on:

- [**Collabs and Community**](#collabs-and-community)
- [**Developer Experience**](#developer-experience)
- [**Integration with Web Browsers**](#integration-with-web-browsers)
- [**IPFS GUI**](#ipfs-gui)
- [**Local Offline Collaboration**](#local-offline-collaboration-locol)

<img src="https://docs.google.com/drawings/d/e/2PACX-1vQ0IEMEJpCM6wawOPDRCCOTqDNSvlKf-3WQE6ZEYqCipDdiaep41htmGfXsLH0tJwRWYNRvzEAdA5EV/pub?w=737&amp;h=419" alt="Working Group leads org chart">

### Project

- **Coordination**: https://github.com/ipfs/team-mgmt
- **[Molly Mackinlay](https://github.com/momack2): Captain**

The Project working group helps support team functioning, prioritization, and day-to-day operations.

**Responsibilities include:**

- Manage cross-coordination and problem-solving between working groups
- Track progression of objectives and key results (OKRs) for the project
- Organize team meet-ups and summits

### Content Routing

- **Coordination**: https://github.com/ipfs/go-libp2p
- **[Steven Allen](https://github.com/stebalien): Captain**
- **[Jake Heun](https://github.com/jacobheun): Technical project manager (TPM)**

The Content Routing working group focuses on making improvements to the core implementations in both IPFS and libp2p such that all IPFS users can find and access content they care about in a distributed network of nodes.

**Responsibilities include:**

- Design and implement improvements to the go-libp2p DHT
- Add new features to providers or connection management subsystems
- Test and benchmark existing performance on finding and connecting to nodes with the desired content

### Testground

- **Coordination**: https://github.com/ipfs/testground
- **[Raul Kripalani](https://github.com/raulk): Architect**
- **[David Dias](https://github.com/daviddias): TPM**

The IPFS Testground working group builds testing tooling to validate scalability and reliability of the core IPFS implementations, with easy onboarding for core developers to use in continuous integration and one-off testing.

**Responsibilities include:**

- Build large-scale testing infrastructure to simulate and benchmark IPFS
- Create dashboards and CI hooks to make testing infra more useful/usable
- Support core implementation developers in creating and running real-world test scenarios

### Bifrost

- **Coordination**: TBD
- **[Oli Evans](https://github.com/olizilla): Captain**

Improve performance and stability of IPFS gateways and pinning, and provide public observability of services.

**Responsibilities include:**

- Manage and maintain the IPFS HTTP gateway
- Manage and maintain the IPFS bootstrapper nodes
- Manage and maintain pinbot, the IPFS pinning service
- Monitor services and hosts used by the IPFS dev teams
- Provide guidance to other users that want to host IPFS nodes

### Ecosystem

- **Coordination**: TBD
- **[Dietrich Ayala](https://github.com/autonome): Captain and TPM**

Ensure community health and growth through collaborations, developer experience, and platform availability. This group is the parent group for the [**Integration with Web Browsers**](#integration-with-web-browsers), [**Developer Experience**](#developer-experience), and [**Collabs & Community**](#collabs--community) SIGs.

**Responsibilities include:**

- Steward and improve community and contributor enablement/support
- Manage collaborations (including [with web browsers](https://github.com/ipfs/in-web-browsers))
- Maintain lower-priority systems and tools

## Special Interest Groups

_Cross-cutting research, analysis, and development teams_

### Collabs and Community

- **Coordination**: https://github.com/ipfs/community
- **[Dietrich Ayala](https://github.com/autonome): Captain, TPM**

The Collabs and Community SIG supports IPFS users and nurtures new opportunities through research, collaborations, and community engagement.

**Responsibilities include**:

- Manage community communications channels
- Own collaborations with IPFS users and ecosystem
- Identify areas of opportunity for future IPFS development

### Developer Experience

- **Coordination**: TBD
- **[Dietrich Ayala](https://github.com/autonome): Captain, TPM**

The Developer Experience SIG supports the IPFS technical community through documentation, contributor experience, API ergonomics, and tooling.

**Responsibilities include:**

- Steward [IPFS documentation](https://docs.ipfs.io) accuracy, usability, and accessibility
- Audit, research, and assess community needs to make IPFS more accessible to developer users
- Make improvements to IPFS user-facing subsystems, including the HTTP and client APIs
  
### Integration with Web Browsers

- **Coordination**: https://github.com/ipfs/in-web-browsers
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_INTEGRATION_IN_WEB_BROWSERS.md
- **[Marcin Rataj](https://github.com/lidel): Captain, TPM**
- **[Github team](https://github.com/orgs/ipfs/teams/wg-web-browsers/members)**

The Integration with Web Browsers SIG designs and implements browser integrations, web extensions, service workers, and any other strategy that contributes to IPFS being integrated with today's web.

**Responsibilities include**:

- Browser integrations (Firefox, Chrome, Brave and others)
- IPFS web extension
- IPFS service worker
- IPFS web worker
- Collaborate with with browser vendors
- Identify blockers and design constraints of each integration, figuring out new ways to go around those limitations
- Increase the adoption of the distributed web by making it easy for users to access it
- Define specifications for address schemes, and advocate for those schemes to be adopted

### IPFS GUI/UX

- **Coordination**: https://github.com/ipfs/ipfs-gui
- **[Marcin Rataj](https://github.com/lidel): Captain, TPM**
- **[Github Team](https://github.com/orgs/ipfs/teams/wg-gui-ux)**

Making IPFS GUIs simple, accessible, reusable, and beautiful.

**Responsibilities include**:

- Fight complexity at every step
- Make IPFS usable and comprehensible for everyone
- Publish and promote this work; make doing the right thing the easiest thing
- Demonstrate the nature of the system with effortless, coherent, and compelling interfaces

### Local Offline Collaboration (Locol)

 - **Coordination**: https://github.com/ipfs/local-offline-collab
 - **[Teri Chadbourne](https://github.com/terichadbourne): Captain**

User research, collaborations, and features to make the knowledge and tools on the internet accessible and useful on partitioned, low-bandwidth, or intermittent networks.

**Responsibilities include**:

- Participate in communities like [Offline First](http://offlinefirst.org/)
- Conduct user research around offline and local-first use cases, communities, and best practices
- Support collaborations between IPFS and community members who are building tools for peer-to-peer sharing and collaboration in local/offline networks
- Research and prototype applications that utilize IPFS for local-first collaboration and resilient offline usage
