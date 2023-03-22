const Shadows = mode => {
  if (mode === 'light') {
    return [
      'none',
      '0px 2px 4px 1px rgba(51, 48, 60, 0.03), 0px 3px 4px 0px rgba(51, 48, 60, 0.02), 0px 1px 3px 2px rgba(51, 48, 60, 0.01)',
      '0px 3px 5px 2px rgba(51, 48, 60, 0.03), 0px 3px 5px 0px rgba(51, 48, 60, 0.02), 0px 1px 4px 2px rgba(51, 48, 60, 0.01)',
      '0px 3px 6px 2px rgba(51, 48, 60, 0.03), 0px 4px 6px 0px rgba(51, 48, 60, 0.02), 0px 1px 4px 2px rgba(51, 48, 60, 0.01)',
      '0px 2px 7px 1px rgba(51, 48, 60, 0.03), 0px 4px 7px 0px rgba(51, 48, 60, 0.02), 0px 1px 4px 2px rgba(51, 48, 60, 0.01)',
      '0px 3px 8px 1px rgba(51, 48, 60, 0.03), 0px 6px 8px 0px rgba(51, 48, 60, 0.02), 0px 1px 5px 4px rgba(51, 48, 60, 0.01)',
      '0px 3px 9px 1px rgba(51, 48, 60, 0.03), 0px 8px 9px 0px rgba(51, 48, 60, 0.02), 0px 1px 6px 4px rgba(51, 48, 60, 0.01)',
      '0px 4px 10px 2px rgba(51, 48, 60, 0.03), 0px 9px 10px 1px rgba(51, 48, 60, 0.02), 0px 2px 7px 4px rgba(51, 48, 60, 0.01)',
      '0px 5px 11px 3px rgba(51, 48, 60, 0.03), 0px 8px 11px 1px rgba(51, 48, 60, 0.02), 0px 3px 8px 4px rgba(51, 48, 60, 0.01)',
      '0px 5px 12px 3px rgba(51, 48, 60, 0.03), 0px 9px 12px 1px rgba(51, 48, 60, 0.02), 0px 3px 9px 5px rgba(51, 48, 60, 0.01)',
      '0px 6px 13px 3px rgba(51, 48, 60, 0.03), 0px 10px 13px 1px rgba(51, 48, 60, 0.02), 0px 4px 10px 5px rgba(51, 48, 60, 0.01)',
      '0px 6px 14px 4px rgba(51, 48, 60, 0.03), 0px 11px 14px 1px rgba(51, 48, 60, 0.02), 0px 4px 11px 5px rgba(51, 48, 60, 0.01)',
      '0px 7px 15px 4px rgba(51, 48, 60, 0.03), 0px 12px 15px 2px rgba(51, 48, 60, 0.02), 0px 5px 12px 5px rgba(51, 48, 60, 0.01)',
      '0px 7px 16px 4px rgba(51, 48, 60, 0.03), 0px 13px 16px 2px rgba(51, 48, 60, 0.02), 0px 5px 13px 6px rgba(51, 48, 60, 0.01)',
      '0px 7px 17px 4px rgba(51, 48, 60, 0.03), 0px 14px 17px 2px rgba(51, 48, 60, 0.02), 0px 5px 14px 6px rgba(51, 48, 60, 0.01)',
      '0px 8px 18px 5px rgba(51, 48, 60, 0.03), 0px 15px 18px 2px rgba(51, 48, 60, 0.02), 0px 6px 15px 6px rgba(51, 48, 60, 0.01)',
      '0px 8px 19px 5px rgba(51, 48, 60, 0.03), 0px 16px 19px 2px rgba(51, 48, 60, 0.02), 0px 6px 16px 6px rgba(51, 48, 60, 0.01)',
      '0px 8px 20px 5px rgba(51, 48, 60, 0.03), 0px 17px 20px 2px rgba(51, 48, 60, 0.02), 0px 6px 17px 7px rgba(51, 48, 60, 0.01)',
      '0px 9px 21px 5px rgba(51, 48, 60, 0.03), 0px 18px 21px 2px rgba(51, 48, 60, 0.02), 0px 7px 18px 7px rgba(51, 48, 60, 0.01)',
      '0px 9px 22px 6px rgba(51, 48, 60, 0.03), 0px 19px 22px 2px rgba(51, 48, 60, 0.02), 0px 7px 19px 7px rgba(51, 48, 60, 0.01)',
      '0px 10px 23px 6px rgba(51, 48, 60, 0.03), 0px 20px 23px 3px rgba(51, 48, 60, 0.02), 0px 8px 20px 7px rgba(51, 48, 60, 0.01)',
      '0px 10px 24px 6px rgba(51, 48, 60, 0.03), 0px 21px 24px 3px rgba(51, 48, 60, 0.02), 0px 8px 21px 7px rgba(51, 48, 60, 0.01)',
      '0px 10px 25px 6px rgba(51, 48, 60, 0.03), 0px 22px 25px 3px rgba(51, 48, 60, 0.02), 0px 8px 22px 7px rgba(51, 48, 60, 0.01)',
      '0px 11px 26px 7px rgba(51, 48, 60, 0.03), 0px 23px 26px 3px rgba(51, 48, 60, 0.02), 0px 9px 23px 7px rgba(51, 48, 60, 0.01)',
      '0px 11px 27px 7px rgba(51, 48, 60, 0.03), 0px 24px 27px 3px rgba(51, 48, 60, 0.02), 0px 9px 24px 7px rgba(51, 48, 60, 0.01)'
    ]
  } else {
    return [
      'none',
      '0px 2px 4px 1px rgba(12, 16, 27, 0.15), 0px 3px 4px 0px rgba(12, 16, 27, 0.1), 0px 1px 3px 2px rgba(12, 16, 27, 0.08)',
      '0px 3px 5px 2px rgba(12, 16, 27, 0.15), 0px 3px 5px 0px rgba(12, 16, 27, 0.1), 0px 1px 4px 2px rgba(12, 16, 27, 0.08)',
      '0px 3px 6px 2px rgba(12, 16, 27, 0.15), 0px 4px 6px 0px rgba(12, 16, 27, 0.1), 0px 1px 4px 2px rgba(12, 16, 27, 0.08)',
      '0px 2px 7px 1px rgba(12, 16, 27, 0.15), 0px 4px 7px 0px rgba(12, 16, 27, 0.1), 0px 1px 4px 2px rgba(12, 16, 27, 0.08)',
      '0px 3px 8px 1px rgba(12, 16, 27, 0.15), 0px 6px 8px 0px rgba(12, 16, 27, 0.1), 0px 1px 5px 4px rgba(12, 16, 27, 0.08)',
      '0px 3px 9px 1px rgba(12, 16, 27, 0.15), 0px 8px 9px 0px rgba(12, 16, 27, 0.1), 0px 1px 6px 4px rgba(12, 16, 27, 0.08)',
      '0px 4px 10px 2px rgba(12, 16, 27, 0.15), 0px 9px 10px 1px rgba(12, 16, 27, 0.1), 0px 2px 7px 4px rgba(12, 16, 27, 0.08)',
      '0px 5px 11px 3px rgba(12, 16, 27, 0.15), 0px 8px 11px 1px rgba(12, 16, 27, 0.1), 0px 3px 8px 4px rgba(12, 16, 27, 0.08)',
      '0px 5px 12px 3px rgba(12, 16, 27, 0.15), 0px 9px 12px 1px rgba(12, 16, 27, 0.1), 0px 3px 9px 5px rgba(12, 16, 27, 0.08)',
      '0px 6px 13px 3px rgba(12, 16, 27, 0.15), 0px 10px 13px 1px rgba(12, 16, 27, 0.1), 0px 4px 10px 5px rgba(12, 16, 27, 0.08)',
      '0px 6px 14px 4px rgba(12, 16, 27, 0.15), 0px 11px 14px 1px rgba(12, 16, 27, 0.1), 0px 4px 11px 5px rgba(12, 16, 27, 0.08)',
      '0px 7px 15px 4px rgba(12, 16, 27, 0.15), 0px 12px 15px 2px rgba(12, 16, 27, 0.1), 0px 5px 12px 5px rgba(12, 16, 27, 0.08)',
      '0px 7px 16px 4px rgba(12, 16, 27, 0.15), 0px 13px 16px 2px rgba(12, 16, 27, 0.1), 0px 5px 13px 6px rgba(12, 16, 27, 0.08)',
      '0px 7px 17px 4px rgba(12, 16, 27, 0.15), 0px 14px 17px 2px rgba(12, 16, 27, 0.1), 0px 5px 14px 6px rgba(12, 16, 27, 0.08)',
      '0px 8px 18px 5px rgba(12, 16, 27, 0.15), 0px 15px 18px 2px rgba(12, 16, 27, 0.1), 0px 6px 15px 6px rgba(12, 16, 27, 0.08)',
      '0px 8px 19px 5px rgba(12, 16, 27, 0.15), 0px 16px 19px 2px rgba(12, 16, 27, 0.1), 0px 6px 16px 6px rgba(12, 16, 27, 0.08)',
      '0px 8px 20px 5px rgba(12, 16, 27, 0.15), 0px 17px 20px 2px rgba(12, 16, 27, 0.1), 0px 6px 17px 7px rgba(12, 16, 27, 0.08)',
      '0px 9px 21px 5px rgba(12, 16, 27, 0.15), 0px 18px 21px 2px rgba(12, 16, 27, 0.1), 0px 7px 18px 7px rgba(12, 16, 27, 0.08)',
      '0px 9px 22px 6px rgba(12, 16, 27, 0.15), 0px 19px 22px 2px rgba(12, 16, 27, 0.1), 0px 7px 19px 7px rgba(12, 16, 27, 0.08)',
      '0px 10px 23px 6px rgba(12, 16, 27, 0.15), 0px 20px 23px 3px rgba(12, 16, 27, 0.1), 0px 8px 20px 7px rgba(12, 16, 27, 0.08)',
      '0px 10px 24px 6px rgba(12, 16, 27, 0.15), 0px 21px 24px 3px rgba(12, 16, 27, 0.1), 0px 8px 21px 7px rgba(12, 16, 27, 0.08)',
      '0px 10px 25px 6px rgba(12, 16, 27, 0.15), 0px 22px 25px 3px rgba(12, 16, 27, 0.1), 0px 8px 22px 7px rgba(12, 16, 27, 0.08)',
      '0px 11px 26px 7px rgba(12, 16, 27, 0.15), 0px 23px 26px 3px rgba(12, 16, 27, 0.1), 0px 9px 23px 7px rgba(12, 16, 27, 0.08)',
      '0px 11px 27px 7px rgba(12, 16, 27, 0.15), 0px 24px 27px 3px rgba(12, 16, 27, 0.1), 0px 9px 24px 7px rgba(12, 16, 27, 0.08)'
    ]
  }
}

export default Shadows
