import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Supported Platforms" />
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-12 col-md-8 mx-auto support-matrix">
          <h1 className="fw-light pb-5">Supported Platforms</h1>
          <p className="lead text-muted">This section lists the operating systems that are supported with the latest release of Eclipse Temurin.</p>
          <table className="table table-hover align-middle table-sm my-4">
            <colgroup>
              <col style={{width: '33.3333%'}}/>
                <col/>
                  <col/>
                    <col/>
                      <col/>
            </colgroup>
            <tbody>
              <tr>
                <th rowspan="2">
                  <p>Operating System</p></th>
                <th colspan="8">
                  <p>Eclipse Temurin Version</p></th>
              </tr>
              <tr>
                <th><p>8</p></th>
                <th><p>11</p></th>
                <th><p>16</p></th>
                <th><p>17</p></th>
              </tr>
              <tr>
                <th colspan="5"><p>Windows (x64/x86)</p></th>
              </tr>
              <tr>
                <td><p>Windows Server 2022</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>Windows Server 2019</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>Windows Server 2016</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>Windows Server 2012 R2</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>Windows 11</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>Windows 10</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>Windows 8.1</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <th colspan="5"><p>Linux (x64) <span data-bs-toggle="tooltip" data-bs-placement="right" title="Linux (x64) builds should work on any distribution with glibc version 2.12 or higher."><sup>[1]</sup></span></p></th>
              </tr>
              <tr>
                <td><p>SUSE Linux Enterprise Server (SLES) 12</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>RHEL / CentOS 8.x</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>RHEL / CentOS 7.x</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>Ubuntu 20.04</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>Ubuntu 18.04</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>Alpine Linux 3.5 or later (Headless)</p></td>
                <td><p>n/a</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <th colspan="5"><p>Linux (ARM 64-bit) <span data-bs-toggle="tooltip" data-bs-placement="right" title="Linux (ARM 64-bit) builds should work on any distribution with glibc version 2.17 or higher."><sup>[2]</sup></span></p></th>
              </tr>
              <tr>
                <td><p>RHEL / CentOS 8.x</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>RHEL 7.x</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>Ubuntu 20.04</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <th colspan="5"><p>Linux (ARM 32-bit Hard-Float) <span data-bs-toggle="tooltip" data-bs-placement="right" title="Linux (ARM 32-bit Hard-Float) builds should work on any distribution with glibc version 2.17 or higher."><sup>[2]</sup></span></p></th>
              </tr>
              <tr>
                <td><p>Ubuntu 20.04</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <th colspan="5"><p>Linux (PowerPC 64-bit Little Endian) <span data-bs-toggle="tooltip" data-bs-placement="right" title="Linux (PowerPC 64-bit Little Endian) builds should work on any distribution with glibc version 2.17 or higher."><sup>[2]</sup></span></p></th>
              </tr>
              <tr>
                <td><p>RHEL / CentOS 8.x</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>RHEL / CentOS 7.x</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>Ubuntu 20.04</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <th colspan="5"><p>Linux (s390x) <span data-bs-toggle="tooltip" data-bs-placement="right" title="Linux (s390x) builds should work on any distribution with glibc version 2.17 or higher."><sup>[2]</sup></span></p></th>
              </tr>
              <tr>
                <td><p>RHEL 8.x</p></td>
                <td><p>n/a <span data-bs-toggle="tooltip" data-bs-placement="right" title="JDK8 builds have no JIT so are unsupported."><sup>[3]</sup></span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>RHEL 7.x</p></td>
                <td><p>n/a <span data-bs-toggle="tooltip" data-bs-placement="right" title="JDK8 builds have no JIT so are unsupported."><sup>[3]</sup></span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>Ubuntu 20.04</p></td>
                <td><p>n/a <span data-bs-toggle="tooltip" data-bs-placement="right" title="JDK8 builds have no JIT so are unsupported."><sup>[3]</sup></span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <th colspan="5"><p>macOS (x64) <span data-bs-toggle="tooltip" data-bs-placement="right" title="macOS builds should work on 10.12 or above."><sup>[4]</sup></span></p></th>
              </tr>
              <tr>
                <td><p>macOS 11</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>macOS 10.15</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>macOS 10.14</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <th colspan="5"><p>macOS (Apple Silicon)</p></th>
              </tr>
              <tr>
                <td><p>macOS 11</p></td>
                <td><p>n/a</p></td>
                <td><p>n/a</p></td>
                <td><p>n/a</p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <th colspan="5"><p>Solaris (x64 and Sparc)</p></th>
              </tr>
              <tr>
                <td><p>Solaris 11</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p>n/a</p></td>
                <td><p>n/a</p></td>
                <td><p>n/a</p></td>
              </tr>
              <tr>
                <td><p>Solaris 10u11</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p>n/a</p></td>
                <td><p>n/a</p></td>
                <td><p>n/a</p></td>
              </tr>
              <tr>
                <th colspan="5"><p>AIX (PowerPC 64-bit Big Endian)</p></th>
              </tr>
              <tr>
                <td><p>AIX 7.2</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>AIX 7.1 TL5 SP5</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
              <tr>
                <td><p>AIX 7.1 TL4</p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
                <td><p><span className="supported">✔</span></p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
