import {ExcelComponent} from '@/core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    },
    );
  }


  toHTML() {
    return `
    <div class="button">
    <span class="material-icons-outlined">
        format_align_left
    </span>
</div>

<div class="button">
    <span class="material-icons-outlined">
        format_align_right
    </span>
</div>

<div class="button">
    <span class="material-icons-outlined">
        format_align_center
    </span>
</div>

<div class="button">
    <span class="material-icons-outlined">
        format_bold
    </span>
</div>

<div class="button">
    <span class="material-icons-outlined">
        format_italic
    </span>
</div>

<div class="button">
    <span class="material-icons-outlined">
        format_underline
    </span>
</div>
    `;
  }

  onClick(event, callback) {
    console.log('click toolbar');
  }
}
