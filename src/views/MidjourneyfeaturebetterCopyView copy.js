/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6582639e366593bc3c525810").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class MidjourneyfeaturebetterCopyView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/MidjourneyfeaturebetterCopyController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = MidjourneyfeaturebetterCopyView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '658e542bc4c1c4b70c9dc14d'
    htmlEl.dataset['wfSite'] = '6582639e366593bc3c525810'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = MidjourneyfeaturebetterCopyView.Controller !== MidjourneyfeaturebetterCopyView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/christophers-radical-site-1dd03a.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-spark-section">
              <div className="af-class-spark-container w-container">
                <div className="af-class-spark-centered-900">
                  <h2>Your Stream</h2>
                  <p className="af-class-spark-secondary-paragraph-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc risus, consectetur eu sodales elementum, convallis in neque. Phasellus a felis ut erat hendrerit accumsan.</p>
                </div>
                <div data-current="Tab 1" data-easing="ease" data-duration-in={300} data-duration-out={100} className="af-class-spark-tabs-parent w-tabs">
                  <div className="af-class-spark-tabs-menu w-tab-menu">
                    <a data-w-tab="Tab 1" className="af-class-spark-tab w-inline-block w-tab-link w--current">
                      <div className="af-class-text-block-11">Trending</div>
                    </a>
                    <a data-w-tab="Tab 2" className="af-class-spark-tab w-inline-block w-tab-link">
                      <div>#politics</div>
                    </a>
                    <a data-w-tab="Tab 3" className="af-class-spark-tab w-inline-block w-tab-link">
                      <div className="af-class-text-block-12">#politics</div>
                    </a>
                    <a data-w-tab="Tab 4" className="af-class-tab-link-tab-4 w-inline-block w-tab-link">
                      <div className="af-class-text-block-12">#entertainment</div>
                    </a>
                    <a data-w-tab="Tab 5" className="af-class-tab-link-tab-5 w-inline-block w-tab-link">
                      <div className="af-class-text-block-12">#cryptocurrency</div>
                    </a>
                    <hr />
                    <a data-w-tab="Tab 6" className="af-class-spark-tab w-inline-block w-tab-link" />
                    <a data-w-tab="Tab 7" className="af-class-spark-tab w-inline-block w-tab-link" />
                  </div>
                  <div className="af-class-spark-tabs-content w-tab-content">
                    <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                      <div className="af-class-spark-three-column-grid">
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184aaae-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" />
                            <path className="af-class-cf-gradient-span" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            <path className="af-class-cf-gradient-span" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          </a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">#cryptocurrency 3 minutes ago</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184aab6-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-streamboldheading af-class-spark-card-title">John shared a new photo </p>
                            <p className="af-class-spark-small-sub-paragraph">#cryptocurrency 3 minutes ago</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184aabe-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.34375px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">#cryptocurrency 3 minutes ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-spark-three-column-grid">
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184aac7-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} data-w-id="d8d9b747-d5c0-c5e6-be55-4256c184aac9" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Aut aliquam et at quod. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184aacf-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184aad7-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.34375px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-spark-three-column-grid">
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184aae0-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Aut aliquam et at quod. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184aae8-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184aaf0-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.34375px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-spark-three-column-grid">
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184aaf9-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Aut aliquam et at quod. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab01-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab09-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.34375px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-spark-three-column-grid">
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab12-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Aut aliquam et at quod. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab1a-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab22-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.34375px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-spark-three-column-grid">
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab2b-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Aut aliquam et at quod. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab33-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab3b-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.34375px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Tab 2" className="w-tab-pane">
                      <div className="af-class-spark-three-column-grid">
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab45-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Aut aliquam et at quod. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab4d-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab55-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.34375px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Tab 3" className="w-tab-pane">
                      <div className="af-class-spark-three-column-grid">
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab5f-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Aut aliquam et at quod. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab67-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184ab6f-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.34375px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Tab 4" className="w-tab-pane" />
                    <div data-w-tab="Tab 5" className="w-tab-pane" />
                    <div data-w-tab="Tab 6" className="w-tab-pane">
                      <div className="af-class-spark-three-column-grid">
                        <div id="w-node-ba87e158-3402-5830-414a-d6c2b0893093-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Aut aliquam et at quod. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-ba87e158-3402-5830-414a-d6c2b089309b-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-ba87e158-3402-5830-414a-d6c2b08930a3-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.34375px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Tab 7" className="w-tab-pane">
                      <div className="af-class-spark-three-column-grid">
                        <div id="w-node-_789ba488-5536-b52e-0c0b-331ff8d6a0be-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Aut aliquam et at quod. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-_789ba488-5536-b52e-0c0b-331ff8d6a0c6-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                        <div id="w-node-_789ba488-5536-b52e-0c0b-331ff8d6a0ce-c184aa9d" className="af-class-spark-wrapped-card af-class-spark-stacked">
                          <a href="#" className="w-inline-block"><img width={80} sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.34375px" alt src="images/Ratio-1_2Ratio-1_1.webp" loading="eager" srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w" className="af-class-spark-square-image-card" /></a>
                          <div className="af-class-spark-card-details">
                            <p className="af-class-spark-bold-heading af-class-spark-card-title">Product title</p>
                            <p className="af-class-spark-small-sub-paragraph">Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-bg-[#af-class-010101] af-class-p-8">
                {/*  ComHeader equivalent  */}
                <div className="af-class-com-header">
                  {/*  ComHeader content goes here  */}
                </div>
                <h1 className="af-class-text-white af-class-font-roboto af-class-text-4xl af-class-mb-6">
                  Community Showcase
                </h1>
                <div className="af-class-grid af-class-grid-cols-3 af-class-gap-4">
                  {/*  Repeat this block for each image  */}
                  <div className="af-class-relative">
                    <button className="af-class-absolute af-class-bottom-4 af-class-left-4 af-class-bg-white af-class-py-2 af-class-px-3 af-class-rounded-lg af-class-flex af-class-items-center af-class-shadow-md">
                      <i className="af-class-fa af-class-fa-heart af-class-text-red-500 af-class-mr-2" />
                      <span className="af-class-text-black">Like</span>
                    </button>
                  </div>
                  {/*  ... other image blocks ...  */}
                </div>
                <div className="af-class-flex af-class-justify-end af-class-mt-4">
                  <button className="af-class-text-white af-class-font-roboto af-class-bg-[#af-class-121212] af-class-py-2 af-class-px-4 af-class-rounded-lg af-class-mr-2 af-class-flex af-class-items-center">
                    <i className="af-class-fa af-class-fa-clock-o af-class-mr-2" /> Recent
                  </button>
                  <button className="af-class-text-white af-class-font-roboto af-class-bg-[#af-class-121212] af-class-py-2 af-class-px-4 af-class-rounded-lg af-class-flex af-class-items-center">
                    <i className="af-class-fa af-class-fa-star af-class-mr-2" /> Top
                  </button>
                </div>
              </div>
            </div></div>
        </span>
      </span>
    )
  }
}

export default MidjourneyfeaturebetterCopyView

/* eslint-enable */