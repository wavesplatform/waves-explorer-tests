const { I } = inject();

module.exports = {

  title: {css: 'div > span.title'},

  navigator: {
  	first: {css: 'span.page-link.first'},
  	last: {css: 'span.page-link.last'},

  	prevFive: {css: 'span.page:nth-child(2)'},
  	nextFive: {css: 'span.page:nth-last-child(2)'},

  	currentPage: {css: 'span.page.current'},

  	getPageByNum(num) {
  		return {xpath: `//span[contains(@class,"page")][text()="${num}"]`};
  	}
  },

  header: {
  	height: {css: 'table > thead > tr > th.timestamp'},
  	baseTarget: {css: 'table > thead > tr > th.target.nowrap'},
  	generator: {css: 'table > thead > tr > th:nth-child(3)'},
  	txCount: {css: 'table > thead > tr > th.txs'}
  },

  blockRow: {
  	icon: {css: 'table > tbody > tr:nth-child(1) > td.block-img-handler.nowrap > div.block-img.sm-hide'},
  	height: {css: 'table > tbody > tr:nth-child(1) > td.block-img-handler.nowrap > div.line.no-wrap > a'},
  	timestamp: {css: 'table > tbody > tr:nth-child(1) > td.block-img-handler.nowrap > div.line.no-break > label'},
  	baseTarget: {css: 'table > tbody > tr:nth-child(1) > td:nth-child(2) > div'},
  	generator: {css: 'table > tbody > tr:nth-child(1) > td:nth-child(3) > div:nth-child(1) > a'},
  	signature: {css: 'table > tbody > tr:nth-child(1) > td:nth-child(3) > div:nth-child(2) > label'},
  	txCount: {css: 'table > tbody > tr:nth-child(1) > td:nth-child(4) > div'}
  }
}
