interface Document {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
}
