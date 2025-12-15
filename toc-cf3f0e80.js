// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/welcome.html"><strong aria-hidden="true">1.</strong> Willkommen!</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/index.html"><strong aria-hidden="true">2.</strong> Virtual Stammtisch</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-03-01/index.html"><strong aria-hidden="true">3.</strong> 2021-03-01</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-03-08/index.html"><strong aria-hidden="true">4.</strong> 2021-03-08</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-03-15/index.html"><strong aria-hidden="true">5.</strong> 2021-03-15</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-03-22/index.html"><strong aria-hidden="true">6.</strong> 2021-03-22</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-03-29/index.html"><strong aria-hidden="true">7.</strong> 2021-03-29</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-04-05/index.html"><strong aria-hidden="true">8.</strong> 2021-04-05</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-04-12/index.html"><strong aria-hidden="true">9.</strong> 2021-04-12</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-04-19/index.html"><strong aria-hidden="true">10.</strong> 2021-04-19</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-04-26/index.html"><strong aria-hidden="true">11.</strong> 2021-04-26</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-05-03/index.html"><strong aria-hidden="true">12.</strong> 2021-05-03</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-05-10/index.html"><strong aria-hidden="true">13.</strong> 2021-05-10</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-05-17/index.html"><strong aria-hidden="true">14.</strong> 2021-05-17</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-05-24/index.html"><strong aria-hidden="true">15.</strong> 2021-05-24</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-05-31/index.html"><strong aria-hidden="true">16.</strong> 2021-05-31</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-06-07/index.html"><strong aria-hidden="true">17.</strong> 2021-06-07</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-06-14/index.html"><strong aria-hidden="true">18.</strong> 2021-06-14</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-06-21/index.html"><strong aria-hidden="true">19.</strong> 2021-06-21</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-06-28/index.html"><strong aria-hidden="true">20.</strong> 2021-06-28</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-07-05/index.html"><strong aria-hidden="true">21.</strong> 2021-07-05</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-07-12/index.html"><strong aria-hidden="true">22.</strong> 2021-07-12</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-07-19/index.html"><strong aria-hidden="true">23.</strong> 2021-07-19</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-07-26/index.html"><strong aria-hidden="true">24.</strong> 2021-07-26</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-08-02/index.html"><strong aria-hidden="true">25.</strong> 2021-08-02</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-08-09/index.html"><strong aria-hidden="true">26.</strong> 2021-08-09</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-08-16/index.html"><strong aria-hidden="true">27.</strong> 2021-08-16</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-08-23/index.html"><strong aria-hidden="true">28.</strong> 2021-08-23</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-08-30/index.html"><strong aria-hidden="true">29.</strong> 2021-08-30</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-09-06/index.html"><strong aria-hidden="true">30.</strong> 2021-09-06</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-09-13/index.html"><strong aria-hidden="true">31.</strong> 2021-09-13</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-09-20/index.html"><strong aria-hidden="true">32.</strong> 2021-09-20</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-09-27/index.html"><strong aria-hidden="true">33.</strong> 2021-09-27</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-10-04/index.html"><strong aria-hidden="true">34.</strong> 2021-10-04</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-10-11/index.html"><strong aria-hidden="true">35.</strong> 2021-10-11</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-10-18/index.html"><strong aria-hidden="true">36.</strong> 2021-10-18</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-10-25/index.html"><strong aria-hidden="true">37.</strong> 2021-10-25</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-11-01/index.html"><strong aria-hidden="true">38.</strong> 2021-11-01</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-11-08/index.html"><strong aria-hidden="true">39.</strong> 2021-11-08</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-11-15/index.html"><strong aria-hidden="true">40.</strong> 2021-11-15</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-11-22/index.html"><strong aria-hidden="true">41.</strong> 2021-11-22</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-11-29/index.html"><strong aria-hidden="true">42.</strong> 2021-11-29</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-12-06/index.html"><strong aria-hidden="true">43.</strong> 2021-12-06</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-12-13/index.html"><strong aria-hidden="true">44.</strong> 2021-12-13</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-12-20/index.html"><strong aria-hidden="true">45.</strong> 2021-12-20</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2021-12-27/index.html"><strong aria-hidden="true">46.</strong> 2021-12-27</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-01-03/index.html"><strong aria-hidden="true">47.</strong> 2022-01-03</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-01-10/index.html"><strong aria-hidden="true">48.</strong> 2022-01-10</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-01-17/index.html"><strong aria-hidden="true">49.</strong> 2022-01-17</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-01-24/index.html"><strong aria-hidden="true">50.</strong> 2022-01-24</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-01-31/index.html"><strong aria-hidden="true">51.</strong> 2022-01-31</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-02-07/index.html"><strong aria-hidden="true">52.</strong> 2022-02-07</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-02-14/index.html"><strong aria-hidden="true">53.</strong> 2022-02-14</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-02-21/index.html"><strong aria-hidden="true">54.</strong> 2022-02-21</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-02-28/index.html"><strong aria-hidden="true">55.</strong> 2022-02-28</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-03-07/index.html"><strong aria-hidden="true">56.</strong> 2022-03-07</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-03-14/index.html"><strong aria-hidden="true">57.</strong> 2022-03-14</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-03-21/index.html"><strong aria-hidden="true">58.</strong> 2022-03-21</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-03-28/index.html"><strong aria-hidden="true">59.</strong> 2022-03-28</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-04-04/index.html"><strong aria-hidden="true">60.</strong> 2022-04-04</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-04-11/index.html"><strong aria-hidden="true">61.</strong> 2022-04-11</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-04-18/index.html"><strong aria-hidden="true">62.</strong> 2022-04-18</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-04-25/index.html"><strong aria-hidden="true">63.</strong> 2022-04-25</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-05-02/index.html"><strong aria-hidden="true">64.</strong> 2022-05-02</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-05-09/index.html"><strong aria-hidden="true">65.</strong> 2022-05-09</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-05-16/index.html"><strong aria-hidden="true">66.</strong> 2022-05-16</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-05-23/index.html"><strong aria-hidden="true">67.</strong> 2022-05-23</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-05-30/index.html"><strong aria-hidden="true">68.</strong> 2022-05-30</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-06-06/index.html"><strong aria-hidden="true">69.</strong> 2022-06-06</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-06-13/index.html"><strong aria-hidden="true">70.</strong> 2022-06-13</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-06-20/index.html"><strong aria-hidden="true">71.</strong> 2022-06-20</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-06-27/index.html"><strong aria-hidden="true">72.</strong> 2022-06-27</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-07-04/index.html"><strong aria-hidden="true">73.</strong> 2022-07-04</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-07-11/index.html"><strong aria-hidden="true">74.</strong> 2022-07-11</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-07-18/index.html"><strong aria-hidden="true">75.</strong> 2022-07-18</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-07-25/index.html"><strong aria-hidden="true">76.</strong> 2022-07-25</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-08-01/index.html"><strong aria-hidden="true">77.</strong> 2022-08-01</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-08-08/index.html"><strong aria-hidden="true">78.</strong> 2022-08-08</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-08-15/index.html"><strong aria-hidden="true">79.</strong> 2022-08-15</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-08-22/index.html"><strong aria-hidden="true">80.</strong> 2022-08-22</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-08-29/index.html"><strong aria-hidden="true">81.</strong> 2022-08-29</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-09-05/index.html"><strong aria-hidden="true">82.</strong> 2022-09-05</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-09-12/index.html"><strong aria-hidden="true">83.</strong> 2022-09-12</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-09-19/index.html"><strong aria-hidden="true">84.</strong> 2022-09-19</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-09-26/index.html"><strong aria-hidden="true">85.</strong> 2022-09-26</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-10-03/index.html"><strong aria-hidden="true">86.</strong> 2022-10-03</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-10-10/index.html"><strong aria-hidden="true">87.</strong> 2022-10-10</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-10-17/index.html"><strong aria-hidden="true">88.</strong> 2022-10-17</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-10-24/index.html"><strong aria-hidden="true">89.</strong> 2022-10-24</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-10-31/index.html"><strong aria-hidden="true">90.</strong> 2022-10-31</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-11-07/index.html"><strong aria-hidden="true">91.</strong> 2022-11-07</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-11-14/index.html"><strong aria-hidden="true">92.</strong> 2022-11-14</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-11-21/index.html"><strong aria-hidden="true">93.</strong> 2022-11-21</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-11-28/index.html"><strong aria-hidden="true">94.</strong> 2022-11-28</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-12-05/index.html"><strong aria-hidden="true">95.</strong> 2022-12-05</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-12-12/index.html"><strong aria-hidden="true">96.</strong> 2022-12-12</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-12-19/index.html"><strong aria-hidden="true">97.</strong> 2022-12-19</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2022-12-26/index.html"><strong aria-hidden="true">98.</strong> 2022-12-26</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-01-02/index.html"><strong aria-hidden="true">99.</strong> 2023-01-02</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-01-09/index.html"><strong aria-hidden="true">100.</strong> 2023-01-09</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-01-16/index.html"><strong aria-hidden="true">101.</strong> 2023-01-16</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-01-23/index.html"><strong aria-hidden="true">102.</strong> 2023-01-23</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-01-30/index.html"><strong aria-hidden="true">103.</strong> 2023-01-30</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-02-06/index.html"><strong aria-hidden="true">104.</strong> 2023-02-06</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-02-13/index.html"><strong aria-hidden="true">105.</strong> 2023-02-13</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-02-20/index.html"><strong aria-hidden="true">106.</strong> 2023-02-20</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-02-27/index.html"><strong aria-hidden="true">107.</strong> 2023-02-27</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-03-06/index.html"><strong aria-hidden="true">108.</strong> 2023-03-06</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-03-13/index.html"><strong aria-hidden="true">109.</strong> 2023-03-13</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-03-20/index.html"><strong aria-hidden="true">110.</strong> 2023-03-20</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-03-27/index.html"><strong aria-hidden="true">111.</strong> 2023-03-27</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-04-03/index.html"><strong aria-hidden="true">112.</strong> 2023-04-03</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-04-10/index.html"><strong aria-hidden="true">113.</strong> 2023-04-10</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-04-17/index.html"><strong aria-hidden="true">114.</strong> 2023-04-17</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-04-24/index.html"><strong aria-hidden="true">115.</strong> 2023-04-24</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-05-01/index.html"><strong aria-hidden="true">116.</strong> 2023-05-01</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-05-08/index.html"><strong aria-hidden="true">117.</strong> 2023-05-08</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-05-15/index.html"><strong aria-hidden="true">118.</strong> 2023-05-15</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-05-22/index.html"><strong aria-hidden="true">119.</strong> 2023-05-22</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-05-29/index.html"><strong aria-hidden="true">120.</strong> 2023-05-29</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-06-05/index.html"><strong aria-hidden="true">121.</strong> 2023-06-05</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-06-12/index.html"><strong aria-hidden="true">122.</strong> 2023-06-12</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-06-19/index.html"><strong aria-hidden="true">123.</strong> 2023-06-19</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-06-26/index.html"><strong aria-hidden="true">124.</strong> 2023-06-26</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-07-03/index.html"><strong aria-hidden="true">125.</strong> 2023-07-03</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-07-10/index.html"><strong aria-hidden="true">126.</strong> 2023-07-10</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-07-17/index.html"><strong aria-hidden="true">127.</strong> 2023-07-17</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-07-24/index.html"><strong aria-hidden="true">128.</strong> 2023-07-24</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-07-31/index.html"><strong aria-hidden="true">129.</strong> 2023-07-31</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-08-07/index.html"><strong aria-hidden="true">130.</strong> 2023-08-07</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-08-14/index.html"><strong aria-hidden="true">131.</strong> 2023-08-14</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-08-21/index.html"><strong aria-hidden="true">132.</strong> 2023-08-21</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-08-28/index.html"><strong aria-hidden="true">133.</strong> 2023-08-28</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-09-04/index.html"><strong aria-hidden="true">134.</strong> 2023-09-04</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-09-11/index.html"><strong aria-hidden="true">135.</strong> 2023-09-11</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-09-18/index.html"><strong aria-hidden="true">136.</strong> 2023-09-18</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-09-25/index.html"><strong aria-hidden="true">137.</strong> 2023-09-25</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-10-02/index.html"><strong aria-hidden="true">138.</strong> 2023-10-02</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-10-09/index.html"><strong aria-hidden="true">139.</strong> 2023-10-09</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-10-16/index.html"><strong aria-hidden="true">140.</strong> 2023-10-16</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-10-23/index.html"><strong aria-hidden="true">141.</strong> 2023-10-23</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-10-30/index.html"><strong aria-hidden="true">142.</strong> 2023-10-30</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-11-06/index.html"><strong aria-hidden="true">143.</strong> 2023-11-06</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-11-13/index.html"><strong aria-hidden="true">144.</strong> 2023-11-13</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-11-20/index.html"><strong aria-hidden="true">145.</strong> 2023-11-20</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-11-27/index.html"><strong aria-hidden="true">146.</strong> 2023-11-27</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-12-04/index.html"><strong aria-hidden="true">147.</strong> 2023-12-04</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-12-11/index.html"><strong aria-hidden="true">148.</strong> 2023-12-11</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-12-18/index.html"><strong aria-hidden="true">149.</strong> 2023-12-18</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2023-12-25/index.html"><strong aria-hidden="true">150.</strong> 2023-12-25</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-01-01/index.html"><strong aria-hidden="true">151.</strong> 2024-01-01</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-01-08/index.html"><strong aria-hidden="true">152.</strong> 2024-01-08</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-01-15/index.html"><strong aria-hidden="true">153.</strong> 2024-01-15</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-01-22/index.html"><strong aria-hidden="true">154.</strong> 2024-01-22</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-01-29/index.html"><strong aria-hidden="true">155.</strong> 2024-01-29</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-02-05/index.html"><strong aria-hidden="true">156.</strong> 2024-02-05</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-02-12/index.html"><strong aria-hidden="true">157.</strong> 2024-02-12</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-02-19/index.html"><strong aria-hidden="true">158.</strong> 2024-02-19</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-02-26/index.html"><strong aria-hidden="true">159.</strong> 2024-02-26</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-03-04/index.html"><strong aria-hidden="true">160.</strong> 2024-03-04</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-03-11/index.html"><strong aria-hidden="true">161.</strong> 2024-03-11</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-03-18/index.html"><strong aria-hidden="true">162.</strong> 2024-03-18</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-03-25/index.html"><strong aria-hidden="true">163.</strong> 2024-03-25</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-04-01/index.html"><strong aria-hidden="true">164.</strong> 2024-04-01</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-04-08/index.html"><strong aria-hidden="true">165.</strong> 2024-04-08</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-04-15/index.html"><strong aria-hidden="true">166.</strong> 2024-04-15</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-04-22/index.html"><strong aria-hidden="true">167.</strong> 2024-04-22</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-04-29/index.html"><strong aria-hidden="true">168.</strong> 2024-04-29</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-05-06/index.html"><strong aria-hidden="true">169.</strong> 2024-05-06</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-05-13/index.html"><strong aria-hidden="true">170.</strong> 2024-05-13</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-05-20/index.html"><strong aria-hidden="true">171.</strong> 2024-05-20</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-05-27/index.html"><strong aria-hidden="true">172.</strong> 2024-05-27</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-06-03/index.html"><strong aria-hidden="true">173.</strong> 2024-06-03</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-06-10/index.html"><strong aria-hidden="true">174.</strong> 2024-06-10</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-06-17/index.html"><strong aria-hidden="true">175.</strong> 2024-06-17</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-06-24/index.html"><strong aria-hidden="true">176.</strong> 2024-06-24</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-07-01/index.html"><strong aria-hidden="true">177.</strong> 2024-07-01</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-07-08/index.html"><strong aria-hidden="true">178.</strong> 2024-07-08</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-07-15/index.html"><strong aria-hidden="true">179.</strong> 2024-07-15</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-07-22/index.html"><strong aria-hidden="true">180.</strong> 2024-07-22</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-07-29/index.html"><strong aria-hidden="true">181.</strong> 2024-07-29</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-08-05/index.html"><strong aria-hidden="true">182.</strong> 2024-08-05</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-08-12/index.html"><strong aria-hidden="true">183.</strong> 2024-08-12</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-08-19/index.html"><strong aria-hidden="true">184.</strong> 2024-08-19</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-08-26/index.html"><strong aria-hidden="true">185.</strong> 2024-08-26</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-09-02/index.html"><strong aria-hidden="true">186.</strong> 2024-09-02</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-09-09/index.html"><strong aria-hidden="true">187.</strong> 2024-09-09</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-09-16/index.html"><strong aria-hidden="true">188.</strong> 2024-09-16</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-09-23/index.html"><strong aria-hidden="true">189.</strong> 2024-09-23</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-09-30/index.html"><strong aria-hidden="true">190.</strong> 2024-09-30</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-10-07/index.html"><strong aria-hidden="true">191.</strong> 2024-10-07</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-10-14/index.html"><strong aria-hidden="true">192.</strong> 2024-10-14</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-10-21/index.html"><strong aria-hidden="true">193.</strong> 2024-10-21</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-10-28/index.html"><strong aria-hidden="true">194.</strong> 2024-10-28</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-11-04/index.html"><strong aria-hidden="true">195.</strong> 2024-11-04</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-11-11/index.html"><strong aria-hidden="true">196.</strong> 2024-11-11</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-11-18/index.html"><strong aria-hidden="true">197.</strong> 2024-11-18</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-11-25/index.html"><strong aria-hidden="true">198.</strong> 2024-11-25</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-12-02/index.html"><strong aria-hidden="true">199.</strong> 2024-12-02</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-12-09/index.html"><strong aria-hidden="true">200.</strong> 2024-12-09</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-12-16/index.html"><strong aria-hidden="true">201.</strong> 2024-12-16</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-12-23/index.html"><strong aria-hidden="true">202.</strong> 2024-12-23</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2024-12-30/index.html"><strong aria-hidden="true">203.</strong> 2024-12-30</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-01-06/index.html"><strong aria-hidden="true">204.</strong> 2025-01-06</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-01-13/index.html"><strong aria-hidden="true">205.</strong> 2025-01-13</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-01-20/index.html"><strong aria-hidden="true">206.</strong> 2025-01-20</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-01-27/index.html"><strong aria-hidden="true">207.</strong> 2025-01-27</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-02-03/index.html"><strong aria-hidden="true">208.</strong> 2025-02-03</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-02-10/index.html"><strong aria-hidden="true">209.</strong> 2025-02-10</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-02-17/index.html"><strong aria-hidden="true">210.</strong> 2025-02-17</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-02-24/index.html"><strong aria-hidden="true">211.</strong> 2025-02-24</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-03-03/index.html"><strong aria-hidden="true">212.</strong> 2025-03-03</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-03-10/index.html"><strong aria-hidden="true">213.</strong> 2025-03-10</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-03-17/index.html"><strong aria-hidden="true">214.</strong> 2025-03-17</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-03-24/index.html"><strong aria-hidden="true">215.</strong> 2025-03-24</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-03-31/index.html"><strong aria-hidden="true">216.</strong> 2025-03-31</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-04-07/index.html"><strong aria-hidden="true">217.</strong> 2025-04-07</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-04-14/index.html"><strong aria-hidden="true">218.</strong> 2025-04-14</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-04-21/index.html"><strong aria-hidden="true">219.</strong> 2025-04-21</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-04-28/index.html"><strong aria-hidden="true">220.</strong> 2025-04-28</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-05-05/index.html"><strong aria-hidden="true">221.</strong> 2025-05-05</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-05-12/index.html"><strong aria-hidden="true">222.</strong> 2025-05-12</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-05-19/index.html"><strong aria-hidden="true">223.</strong> 2025-05-19</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-05-26/index.html"><strong aria-hidden="true">224.</strong> 2025-05-26</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-06-02/index.html"><strong aria-hidden="true">225.</strong> 2025-06-02</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-06-09/index.html"><strong aria-hidden="true">226.</strong> 2025-06-09</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-06-16/index.html"><strong aria-hidden="true">227.</strong> 2025-06-16</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-06-23/index.html"><strong aria-hidden="true">228.</strong> 2025-06-23</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-06-30/index.html"><strong aria-hidden="true">229.</strong> 2025-06-30</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-07-07/index.html"><strong aria-hidden="true">230.</strong> 2025-07-07</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-07-14/index.html"><strong aria-hidden="true">231.</strong> 2025-07-14</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-07-21/index.html"><strong aria-hidden="true">232.</strong> 2025-07-21</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-07-28/index.html"><strong aria-hidden="true">233.</strong> 2025-07-28</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-08-04/index.html"><strong aria-hidden="true">234.</strong> 2025-08-04</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-08-11/index.html"><strong aria-hidden="true">235.</strong> 2025-08-11</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-08-18/index.html"><strong aria-hidden="true">236.</strong> 2025-08-18</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-08-25/index.html"><strong aria-hidden="true">237.</strong> 2025-08-25</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-09-01/index.html"><strong aria-hidden="true">238.</strong> 2025-09-01</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-09-08/index.html"><strong aria-hidden="true">239.</strong> 2025-09-08</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-09-15/index.html"><strong aria-hidden="true">240.</strong> 2025-09-15</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-09-22/index.html"><strong aria-hidden="true">241.</strong> 2025-09-22</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-09-29/index.html"><strong aria-hidden="true">242.</strong> 2025-09-29</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-10-06/index.html"><strong aria-hidden="true">243.</strong> 2025-10-06</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-10-13/index.html"><strong aria-hidden="true">244.</strong> 2025-10-13</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-10-20/index.html"><strong aria-hidden="true">245.</strong> 2025-10-20</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-10-27/index.html"><strong aria-hidden="true">246.</strong> 2025-10-27</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-11-03/index.html"><strong aria-hidden="true">247.</strong> 2025-11-03</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-11-10/index.html"><strong aria-hidden="true">248.</strong> 2025-11-10</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-11-17/index.html"><strong aria-hidden="true">249.</strong> 2025-11-17</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-11-24/index.html"><strong aria-hidden="true">250.</strong> 2025-11-24</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-12-01/index.html"><strong aria-hidden="true">251.</strong> 2025-12-01</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-12-08/index.html"><strong aria-hidden="true">252.</strong> 2025-12-08</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="stammtisch/2025-12-15/index.html"><strong aria-hidden="true">253.</strong> 2025-12-15</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

