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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="stammtisch/welcome.html"><strong aria-hidden="true">1.</strong> Willkommen!</a></li><li class="chapter-item expanded "><a href="stammtisch/index.html"><strong aria-hidden="true">2.</strong> Virtual Stammtisch</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-03-01/index.html"><strong aria-hidden="true">3.</strong> 2021-03-01</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-03-08/index.html"><strong aria-hidden="true">4.</strong> 2021-03-08</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-03-15/index.html"><strong aria-hidden="true">5.</strong> 2021-03-15</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-03-22/index.html"><strong aria-hidden="true">6.</strong> 2021-03-22</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-03-29/index.html"><strong aria-hidden="true">7.</strong> 2021-03-29</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-04-05/index.html"><strong aria-hidden="true">8.</strong> 2021-04-05</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-04-12/index.html"><strong aria-hidden="true">9.</strong> 2021-04-12</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-04-19/index.html"><strong aria-hidden="true">10.</strong> 2021-04-19</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-04-26/index.html"><strong aria-hidden="true">11.</strong> 2021-04-26</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-05-03/index.html"><strong aria-hidden="true">12.</strong> 2021-05-03</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-05-10/index.html"><strong aria-hidden="true">13.</strong> 2021-05-10</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-05-17/index.html"><strong aria-hidden="true">14.</strong> 2021-05-17</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-05-24/index.html"><strong aria-hidden="true">15.</strong> 2021-05-24</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-05-31/index.html"><strong aria-hidden="true">16.</strong> 2021-05-31</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-06-07/index.html"><strong aria-hidden="true">17.</strong> 2021-06-07</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-06-14/index.html"><strong aria-hidden="true">18.</strong> 2021-06-14</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-06-21/index.html"><strong aria-hidden="true">19.</strong> 2021-06-21</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-06-28/index.html"><strong aria-hidden="true">20.</strong> 2021-06-28</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-07-05/index.html"><strong aria-hidden="true">21.</strong> 2021-07-05</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-07-12/index.html"><strong aria-hidden="true">22.</strong> 2021-07-12</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-07-19/index.html"><strong aria-hidden="true">23.</strong> 2021-07-19</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-07-26/index.html"><strong aria-hidden="true">24.</strong> 2021-07-26</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-08-02/index.html"><strong aria-hidden="true">25.</strong> 2021-08-02</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-08-09/index.html"><strong aria-hidden="true">26.</strong> 2021-08-09</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-08-16/index.html"><strong aria-hidden="true">27.</strong> 2021-08-16</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-08-23/index.html"><strong aria-hidden="true">28.</strong> 2021-08-23</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-08-30/index.html"><strong aria-hidden="true">29.</strong> 2021-08-30</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-09-06/index.html"><strong aria-hidden="true">30.</strong> 2021-09-06</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-09-13/index.html"><strong aria-hidden="true">31.</strong> 2021-09-13</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-09-20/index.html"><strong aria-hidden="true">32.</strong> 2021-09-20</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-09-27/index.html"><strong aria-hidden="true">33.</strong> 2021-09-27</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-10-04/index.html"><strong aria-hidden="true">34.</strong> 2021-10-04</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-10-11/index.html"><strong aria-hidden="true">35.</strong> 2021-10-11</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-10-18/index.html"><strong aria-hidden="true">36.</strong> 2021-10-18</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-10-25/index.html"><strong aria-hidden="true">37.</strong> 2021-10-25</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-11-01/index.html"><strong aria-hidden="true">38.</strong> 2021-11-01</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-11-08/index.html"><strong aria-hidden="true">39.</strong> 2021-11-08</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-11-15/index.html"><strong aria-hidden="true">40.</strong> 2021-11-15</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-11-22/index.html"><strong aria-hidden="true">41.</strong> 2021-11-22</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-11-29/index.html"><strong aria-hidden="true">42.</strong> 2021-11-29</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-12-06/index.html"><strong aria-hidden="true">43.</strong> 2021-12-06</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-12-13/index.html"><strong aria-hidden="true">44.</strong> 2021-12-13</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-12-20/index.html"><strong aria-hidden="true">45.</strong> 2021-12-20</a></li><li class="chapter-item expanded "><a href="stammtisch/2021-12-27/index.html"><strong aria-hidden="true">46.</strong> 2021-12-27</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-01-03/index.html"><strong aria-hidden="true">47.</strong> 2022-01-03</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-01-10/index.html"><strong aria-hidden="true">48.</strong> 2022-01-10</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-01-17/index.html"><strong aria-hidden="true">49.</strong> 2022-01-17</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-01-24/index.html"><strong aria-hidden="true">50.</strong> 2022-01-24</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-01-31/index.html"><strong aria-hidden="true">51.</strong> 2022-01-31</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-02-07/index.html"><strong aria-hidden="true">52.</strong> 2022-02-07</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-02-14/index.html"><strong aria-hidden="true">53.</strong> 2022-02-14</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-02-21/index.html"><strong aria-hidden="true">54.</strong> 2022-02-21</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-02-28/index.html"><strong aria-hidden="true">55.</strong> 2022-02-28</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-03-07/index.html"><strong aria-hidden="true">56.</strong> 2022-03-07</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-03-14/index.html"><strong aria-hidden="true">57.</strong> 2022-03-14</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-03-21/index.html"><strong aria-hidden="true">58.</strong> 2022-03-21</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-03-28/index.html"><strong aria-hidden="true">59.</strong> 2022-03-28</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-04-04/index.html"><strong aria-hidden="true">60.</strong> 2022-04-04</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-04-11/index.html"><strong aria-hidden="true">61.</strong> 2022-04-11</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-04-18/index.html"><strong aria-hidden="true">62.</strong> 2022-04-18</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-04-25/index.html"><strong aria-hidden="true">63.</strong> 2022-04-25</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-05-02/index.html"><strong aria-hidden="true">64.</strong> 2022-05-02</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-05-09/index.html"><strong aria-hidden="true">65.</strong> 2022-05-09</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-05-16/index.html"><strong aria-hidden="true">66.</strong> 2022-05-16</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-05-23/index.html"><strong aria-hidden="true">67.</strong> 2022-05-23</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-05-30/index.html"><strong aria-hidden="true">68.</strong> 2022-05-30</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-06-06/index.html"><strong aria-hidden="true">69.</strong> 2022-06-06</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-06-13/index.html"><strong aria-hidden="true">70.</strong> 2022-06-13</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-06-20/index.html"><strong aria-hidden="true">71.</strong> 2022-06-20</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-06-27/index.html"><strong aria-hidden="true">72.</strong> 2022-06-27</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-07-04/index.html"><strong aria-hidden="true">73.</strong> 2022-07-04</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-07-11/index.html"><strong aria-hidden="true">74.</strong> 2022-07-11</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-07-18/index.html"><strong aria-hidden="true">75.</strong> 2022-07-18</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-07-25/index.html"><strong aria-hidden="true">76.</strong> 2022-07-25</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-08-01/index.html"><strong aria-hidden="true">77.</strong> 2022-08-01</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-08-08/index.html"><strong aria-hidden="true">78.</strong> 2022-08-08</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-08-15/index.html"><strong aria-hidden="true">79.</strong> 2022-08-15</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-08-22/index.html"><strong aria-hidden="true">80.</strong> 2022-08-22</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-08-29/index.html"><strong aria-hidden="true">81.</strong> 2022-08-29</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-09-05/index.html"><strong aria-hidden="true">82.</strong> 2022-09-05</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-09-12/index.html"><strong aria-hidden="true">83.</strong> 2022-09-12</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-09-19/index.html"><strong aria-hidden="true">84.</strong> 2022-09-19</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-09-26/index.html"><strong aria-hidden="true">85.</strong> 2022-09-26</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-10-03/index.html"><strong aria-hidden="true">86.</strong> 2022-10-03</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-10-10/index.html"><strong aria-hidden="true">87.</strong> 2022-10-10</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-10-17/index.html"><strong aria-hidden="true">88.</strong> 2022-10-17</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-10-24/index.html"><strong aria-hidden="true">89.</strong> 2022-10-24</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-10-31/index.html"><strong aria-hidden="true">90.</strong> 2022-10-31</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-11-07/index.html"><strong aria-hidden="true">91.</strong> 2022-11-07</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-11-14/index.html"><strong aria-hidden="true">92.</strong> 2022-11-14</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-11-21/index.html"><strong aria-hidden="true">93.</strong> 2022-11-21</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-11-28/index.html"><strong aria-hidden="true">94.</strong> 2022-11-28</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-12-05/index.html"><strong aria-hidden="true">95.</strong> 2022-12-05</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-12-12/index.html"><strong aria-hidden="true">96.</strong> 2022-12-12</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-12-19/index.html"><strong aria-hidden="true">97.</strong> 2022-12-19</a></li><li class="chapter-item expanded "><a href="stammtisch/2022-12-26/index.html"><strong aria-hidden="true">98.</strong> 2022-12-26</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-01-02/index.html"><strong aria-hidden="true">99.</strong> 2023-01-02</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-01-09/index.html"><strong aria-hidden="true">100.</strong> 2023-01-09</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-01-16/index.html"><strong aria-hidden="true">101.</strong> 2023-01-16</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-01-23/index.html"><strong aria-hidden="true">102.</strong> 2023-01-23</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-01-30/index.html"><strong aria-hidden="true">103.</strong> 2023-01-30</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-02-06/index.html"><strong aria-hidden="true">104.</strong> 2023-02-06</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-02-13/index.html"><strong aria-hidden="true">105.</strong> 2023-02-13</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-02-20/index.html"><strong aria-hidden="true">106.</strong> 2023-02-20</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-02-27/index.html"><strong aria-hidden="true">107.</strong> 2023-02-27</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-03-06/index.html"><strong aria-hidden="true">108.</strong> 2023-03-06</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-03-13/index.html"><strong aria-hidden="true">109.</strong> 2023-03-13</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-03-20/index.html"><strong aria-hidden="true">110.</strong> 2023-03-20</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-03-27/index.html"><strong aria-hidden="true">111.</strong> 2023-03-27</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-04-03/index.html"><strong aria-hidden="true">112.</strong> 2023-04-03</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-04-10/index.html"><strong aria-hidden="true">113.</strong> 2023-04-10</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-04-17/index.html"><strong aria-hidden="true">114.</strong> 2023-04-17</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-04-24/index.html"><strong aria-hidden="true">115.</strong> 2023-04-24</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-05-01/index.html"><strong aria-hidden="true">116.</strong> 2023-05-01</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-05-08/index.html"><strong aria-hidden="true">117.</strong> 2023-05-08</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-05-15/index.html"><strong aria-hidden="true">118.</strong> 2023-05-15</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-05-22/index.html"><strong aria-hidden="true">119.</strong> 2023-05-22</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-05-29/index.html"><strong aria-hidden="true">120.</strong> 2023-05-29</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-06-05/index.html"><strong aria-hidden="true">121.</strong> 2023-06-05</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-06-12/index.html"><strong aria-hidden="true">122.</strong> 2023-06-12</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-06-19/index.html"><strong aria-hidden="true">123.</strong> 2023-06-19</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-06-26/index.html"><strong aria-hidden="true">124.</strong> 2023-06-26</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-07-03/index.html"><strong aria-hidden="true">125.</strong> 2023-07-03</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-07-10/index.html"><strong aria-hidden="true">126.</strong> 2023-07-10</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-07-17/index.html"><strong aria-hidden="true">127.</strong> 2023-07-17</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-07-24/index.html"><strong aria-hidden="true">128.</strong> 2023-07-24</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-07-31/index.html"><strong aria-hidden="true">129.</strong> 2023-07-31</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-08-07/index.html"><strong aria-hidden="true">130.</strong> 2023-08-07</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-08-14/index.html"><strong aria-hidden="true">131.</strong> 2023-08-14</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-08-21/index.html"><strong aria-hidden="true">132.</strong> 2023-08-21</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-08-28/index.html"><strong aria-hidden="true">133.</strong> 2023-08-28</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-09-04/index.html"><strong aria-hidden="true">134.</strong> 2023-09-04</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-09-11/index.html"><strong aria-hidden="true">135.</strong> 2023-09-11</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-09-18/index.html"><strong aria-hidden="true">136.</strong> 2023-09-18</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-09-25/index.html"><strong aria-hidden="true">137.</strong> 2023-09-25</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-10-02/index.html"><strong aria-hidden="true">138.</strong> 2023-10-02</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-10-09/index.html"><strong aria-hidden="true">139.</strong> 2023-10-09</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-10-16/index.html"><strong aria-hidden="true">140.</strong> 2023-10-16</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-10-23/index.html"><strong aria-hidden="true">141.</strong> 2023-10-23</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-10-30/index.html"><strong aria-hidden="true">142.</strong> 2023-10-30</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-11-06/index.html"><strong aria-hidden="true">143.</strong> 2023-11-06</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-11-13/index.html"><strong aria-hidden="true">144.</strong> 2023-11-13</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-11-20/index.html"><strong aria-hidden="true">145.</strong> 2023-11-20</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-11-27/index.html"><strong aria-hidden="true">146.</strong> 2023-11-27</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-12-04/index.html"><strong aria-hidden="true">147.</strong> 2023-12-04</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-12-11/index.html"><strong aria-hidden="true">148.</strong> 2023-12-11</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-12-18/index.html"><strong aria-hidden="true">149.</strong> 2023-12-18</a></li><li class="chapter-item expanded "><a href="stammtisch/2023-12-25/index.html"><strong aria-hidden="true">150.</strong> 2023-12-25</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-01-01/index.html"><strong aria-hidden="true">151.</strong> 2024-01-01</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-01-08/index.html"><strong aria-hidden="true">152.</strong> 2024-01-08</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-01-15/index.html"><strong aria-hidden="true">153.</strong> 2024-01-15</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-01-22/index.html"><strong aria-hidden="true">154.</strong> 2024-01-22</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-01-29/index.html"><strong aria-hidden="true">155.</strong> 2024-01-29</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-02-05/index.html"><strong aria-hidden="true">156.</strong> 2024-02-05</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-02-12/index.html"><strong aria-hidden="true">157.</strong> 2024-02-12</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-02-19/index.html"><strong aria-hidden="true">158.</strong> 2024-02-19</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-02-26/index.html"><strong aria-hidden="true">159.</strong> 2024-02-26</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-03-04/index.html"><strong aria-hidden="true">160.</strong> 2024-03-04</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-03-11/index.html"><strong aria-hidden="true">161.</strong> 2024-03-11</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-03-18/index.html"><strong aria-hidden="true">162.</strong> 2024-03-18</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-03-25/index.html"><strong aria-hidden="true">163.</strong> 2024-03-25</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-04-01/index.html"><strong aria-hidden="true">164.</strong> 2024-04-01</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-04-08/index.html"><strong aria-hidden="true">165.</strong> 2024-04-08</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-04-15/index.html"><strong aria-hidden="true">166.</strong> 2024-04-15</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-04-22/index.html"><strong aria-hidden="true">167.</strong> 2024-04-22</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-04-29/index.html"><strong aria-hidden="true">168.</strong> 2024-04-29</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-05-06/index.html"><strong aria-hidden="true">169.</strong> 2024-05-06</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-05-13/index.html"><strong aria-hidden="true">170.</strong> 2024-05-13</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-05-20/index.html"><strong aria-hidden="true">171.</strong> 2024-05-20</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-05-27/index.html"><strong aria-hidden="true">172.</strong> 2024-05-27</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-06-03/index.html"><strong aria-hidden="true">173.</strong> 2024-06-03</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-06-10/index.html"><strong aria-hidden="true">174.</strong> 2024-06-10</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-06-17/index.html"><strong aria-hidden="true">175.</strong> 2024-06-17</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-06-24/index.html"><strong aria-hidden="true">176.</strong> 2024-06-24</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-07-01/index.html"><strong aria-hidden="true">177.</strong> 2024-07-01</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-07-08/index.html"><strong aria-hidden="true">178.</strong> 2024-07-08</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-07-15/index.html"><strong aria-hidden="true">179.</strong> 2024-07-15</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-07-22/index.html"><strong aria-hidden="true">180.</strong> 2024-07-22</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-07-29/index.html"><strong aria-hidden="true">181.</strong> 2024-07-29</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-08-05/index.html"><strong aria-hidden="true">182.</strong> 2024-08-05</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-08-12/index.html"><strong aria-hidden="true">183.</strong> 2024-08-12</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-08-19/index.html"><strong aria-hidden="true">184.</strong> 2024-08-19</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-08-26/index.html"><strong aria-hidden="true">185.</strong> 2024-08-26</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-09-02/index.html"><strong aria-hidden="true">186.</strong> 2024-09-02</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-09-09/index.html"><strong aria-hidden="true">187.</strong> 2024-09-09</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-09-16/index.html"><strong aria-hidden="true">188.</strong> 2024-09-16</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-09-23/index.html"><strong aria-hidden="true">189.</strong> 2024-09-23</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-09-30/index.html"><strong aria-hidden="true">190.</strong> 2024-09-30</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-10-07/index.html"><strong aria-hidden="true">191.</strong> 2024-10-07</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-10-14/index.html"><strong aria-hidden="true">192.</strong> 2024-10-14</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-10-21/index.html"><strong aria-hidden="true">193.</strong> 2024-10-21</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-10-28/index.html"><strong aria-hidden="true">194.</strong> 2024-10-28</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-11-04/index.html"><strong aria-hidden="true">195.</strong> 2024-11-04</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-11-11/index.html"><strong aria-hidden="true">196.</strong> 2024-11-11</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-11-18/index.html"><strong aria-hidden="true">197.</strong> 2024-11-18</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-11-25/index.html"><strong aria-hidden="true">198.</strong> 2024-11-25</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-12-02/index.html"><strong aria-hidden="true">199.</strong> 2024-12-02</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-12-09/index.html"><strong aria-hidden="true">200.</strong> 2024-12-09</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-12-16/index.html"><strong aria-hidden="true">201.</strong> 2024-12-16</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-12-23/index.html"><strong aria-hidden="true">202.</strong> 2024-12-23</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-12-30/index.html"><strong aria-hidden="true">203.</strong> 2024-12-30</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-01-06/index.html"><strong aria-hidden="true">204.</strong> 2025-01-06</a></li><li class="chapter-item expanded "><a href="stammtisch/2024-01-13/index.html"><strong aria-hidden="true">205.</strong> 2025-01-13</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
