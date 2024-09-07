export default {
  ".radio": {
    "@apply border-base-content/20 size-6 cursor-pointer appearance-none rounded-full border shrink-0 text-base-content relative p-1": {},
    "boxShadow": "0 1px oklch(0% 0 0 / 0.1) inset",
    "&:before": {
      "@apply rounded-full size-full block": {},
      "content": "\"\""
    },
    "&:focus-visible": {
      "@apply outline-2 outline-offset-2 outline-current": {}
    },
    "&:checked,\n  &[aria-checked=\"true\"]": {
      "animation": "radiomark var(--animation-input, 0.2s) ease-out",
      "@apply bg-base-100 border-current": {},
      "&:before": {
        "@apply bg-current": {},
        "boxShadow": "0 -1px oklch(0% 0 0 / 0.1) inset,\n        0 8px 0 -4px oklch(100% 0 0 / 0.1) inset, 0 1px oklch(0% 0 0 / 0.1)"
      }
    }
  },
  ".radio-primary": {
    "@apply border-current text-primary": {}
  },
  ".radio-secondary": {
    "@apply border-current text-secondary": {}
  },
  ".radio-accent": {
    "@apply border-current text-accent": {}
  },
  ".radio-success": {
    "@apply border-current text-success": {}
  },
  ".radio-warning": {
    "@apply border-current text-warning": {}
  },
  ".radio-info": {
    "@apply border-current text-info": {}
  },
  ".radio-error": {
    "@apply border-current text-error": {}
  },
  ".radio:disabled": {
    "@apply cursor-not-allowed opacity-20": {}
  },
  "@keyframes radiomark": {
    "0%": {
      "padding": "5px"
    },
    "50%": {
      "padding": "3px"
    }
  },
  ".radio-xs": {
    "&:is([type=\"radio\"])": {
      "@apply size-4": {}
    }
  },
  ".radio-sm": {
    "&:is([type=\"radio\"])": {
      "@apply size-5": {}
    }
  },
  ".radio-md": {
    "&:is([type=\"radio\"])": {
      "@apply size-6": {}
    }
  },
  ".radio-lg": {
    "&:is([type=\"radio\"])": {
      "@apply size-8": {}
    }
  }
};