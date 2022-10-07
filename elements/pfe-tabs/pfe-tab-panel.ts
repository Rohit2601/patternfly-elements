import { customElement, property } from 'lit/decorators.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import style from './pfe-tab-panel.scss';
import { BaseTabPanel } from './BaseTabPanel';

/**
 * @slot - Tab panel content
 * @csspart container - container for the panel content
 */
@customElement('pfe-tab-panel')
export class PfeTabPanel extends BaseTabPanel {
  static readonly version = '{{version}}';

  static readonly styles = [style];

  async connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId('pfe-tab-panel');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pfe-tab-panel': PfeTabPanel;
  }
}
