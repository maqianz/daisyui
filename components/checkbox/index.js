export default {
  ".checkbox": {
    "@apply border-base-content/20 rounded-[--radius-btn] size-6 cursor-pointer appearance-none border shrink-0 text-base-content relative p-1": {},
    "boxShadow": "0 1px oklch(0% 0 0 / 0.1) inset",
    "transition": "background-color .2s, box-shadow .2s",
    "&:before": {
      "@apply size-full block content-[''] bg-current opacity-0 rotate-45": {},
      "transition": "clip-path .3s, opacity .1s",
      "transitionDelay": ".1s",
      "clipPath": "polygon(20% 100%, 20% 80%, 50% 80%, 50% 80%, 70% 80%, 70% 100%)",
      "boxShadow": "0px 3px 0 0px oklch(100% 0 0 / 0.1) inset"
    },
    "&:focus-visible": {
      "@apply outline-2 outline-offset-2 outline-current": {}
    },
    "&:checked,\n  &[aria-checked=\"true\"]": {
      "boxShadow": "0 8px 0 -4px oklch(100% 0 0 / 0.1) inset, 0 1px oklch(0% 0 0 / 0.1)",
      "&:before": {
        "@apply opacity-100": {},
        "clipPath": "polygon(20% 100%, 20% 80%, 50% 80%, 50% 0%, 70% 0%, 70% 100%)"
      }
    }
  },
  ".checkbox-primary": {
    "@apply border-primary text-primary-content": {},
    "&:focus-visible": {
      "@apply outline-primary": {}
    },
    "&:checked": {
      "@apply bg-primary": {}
    }
  },
  ".checkbox-secondary": {
    "@apply border-secondary text-secondary-content": {},
    "&:focus-visible": {
      "@apply outline-secondary": {}
    },
    "&:checked": {
      "@apply bg-secondary": {}
    }
  },
  ".checkbox-accent": {
    "@apply border-accent text-accent-content": {},
    "&:focus-visible": {
      "@apply outline-accent": {}
    },
    "&:checked": {
      "@apply bg-accent": {}
    }
  },
  ".checkbox-success": {
    "@apply border-success text-success-content": {},
    "&:focus-visible": {
      "@apply outline-success": {}
    },
    "&:checked": {
      "@apply bg-success": {}
    }
  },
  ".checkbox-warning": {
    "@apply border-warning text-warning-content": {},
    "&:focus-visible": {
      "@apply outline-warning": {}
    },
    "&:checked": {
      "@apply bg-warning": {}
    }
  },
  ".checkbox-info": {
    "@apply border-info text-info-content": {},
    "&:focus-visible": {
      "@apply outline-info": {}
    },
    "&:checked": {
      "@apply bg-info": {}
    }
  },
  ".checkbox-error": {
    "@apply border-error text-error-content": {},
    "&:focus-visible": {
      "@apply outline-error": {}
    },
    "&:checked": {
      "@apply bg-error": {}
    }
  },
  ".checkbox:disabled": {
    "@apply cursor-not-allowed opacity-20": {}
  },
  ".checkbox-xs": {
    "@apply p-[.1875rem]": {},
    "&:is([type=\"checkbox\"])": {
      "@apply size-4": {},
      "&:before": {
        "clipPath": "polygon(10% 100%, 10% 70%, 40% 70%, 40% 70%, 70% 70%, 70% 100%)"
      },
      "&:checked,\n        &[aria-checked=\"true\"]": {
        "&:before": {
          "clipPath": "polygon(10% 100%, 10% 70%, 40% 70%, 40% 0%, 70% 0%, 70% 100%)"
        }
      }
    }
  },
  ".checkbox-sm": {
    "&:is([type=\"checkbox\"])": {
      "@apply size-5": {}
    }
  },
  ".checkbox-md": {
    "&:is([type=\"checkbox\"])": {
      "@apply size-6": {}
    }
  },
  ".checkbox-lg": {
    "&:is([type=\"checkbox\"])": {
      "@apply size-8": {}
    }
  }
};