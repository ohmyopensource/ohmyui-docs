---
title: Adding a Component - Flutter | OhMyUI!
description: Learn how to create a new Flutter widget in OhMyUI!. Step-by-step guide with Dart, tokens, testing and project structure.
head:
  - - meta
    - property: og:title
      content: Adding a Component - Flutter | OhMyUI!
  - - meta
    - property: og:description
      content: Learn how to create a new Flutter widget in OhMyUI!. Step-by-step guide with Dart, tokens, testing and project structure.
  - - meta
    - property: og:url
      content: https://docs.ui.ohmyopensource.org/guides/adding-a-component-flutter
  - - meta
    - name: keywords
      content: flutter widget guide, create flutter component, design system flutter, dart ui components, flutter tokens, ohmyui flutter
  - - meta
    - name: twitter:title
      content: Adding a Component - Flutter | OhMyUI!
  - - meta
    - name: twitter:description
      content: Learn how to create a new Flutter widget in OhMyUI!. Step-by-step guide with Dart, tokens, testing and project structure.
---

# OhMyUI! - Adding a Component: Flutter

This guide walks you through adding a new widget to the Flutter package of OhMyUI! from scratch.

---

## Prerequisites

- Repository cloned and dependencies installed - see [Setup](/getting-started/setup)
- [Flutter SDK](https://flutter.dev/docs/get-started/install) installed and working - run `flutter doctor` to verify
- Familiarity with Flutter widgets and Dart

---

## Step 1 - Create the component folder and files

```bash
mkdir -p packages/ohmyui_flutter/lib/src/components/my_component
touch packages/ohmyui_flutter/lib/src/components/my_component/my_component.dart
```

---

## Step 2 - Write the widget

Open `my_component.dart`:

```dart
import 'package:flutter/material.dart';
import '../../tokens/tokens.dart';

enum OhMyUIMyComponentVariant { primary, secondary }

class OhMyUIMyComponent extends StatelessWidget {
  final String label;
  final OhMyUIMyComponentVariant variant;

  const OhMyUIMyComponent({
    super.key,
    required this.label,
    this.variant = OhMyUIMyComponentVariant.primary,
  });

  Color get _backgroundColor => switch (variant) {
    OhMyUIMyComponentVariant.primary   => OhMyUITokens.colorPrimary500,
    OhMyUIMyComponentVariant.secondary => OhMyUITokens.colorNeutral100,
  };

  Color get _textColor => switch (variant) {
    OhMyUIMyComponentVariant.primary   => OhMyUITokens.colorNeutral0,
    OhMyUIMyComponentVariant.secondary => OhMyUITokens.colorNeutral900,
  };

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(OhMyUITokens.spacing4),
      decoration: BoxDecoration(
        color: _backgroundColor,
        borderRadius: BorderRadius.circular(OhMyUITokens.radiusMd),
      ),
      child: Text(
        label,
        style: TextStyle(
          color: _textColor,
          fontSize: OhMyUITokens.fontSizeMd,
          fontWeight: OhMyUITokens.fontWeightMedium,
        ),
      ),
    );
  }
}
```

> Always use `OhMyUITokens.*` constants - never hardcode colors, spacing or typography values. The full token list is in `packages/ohmyui_flutter/lib/src/tokens/tokens.dart`.

---

## Step 3 - Export the widget

Open `packages/ohmyui_flutter/lib/ohmyui_flutter.dart` and add your export:

```dart
export 'src/tokens/tokens.dart';
export 'src/components/button/button.dart';
export 'src/components/badge/badge.dart';
export 'src/components/my_component/my_component.dart'; // add this
```

---

## Step 4 - Write a test

Create `packages/ohmyui_flutter/test/my_component_test.dart`:

```dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ohmyui_flutter/ohmyui_flutter.dart';

void main() {
  testWidgets('OhMyUIMyComponent renders label', (WidgetTester tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(
          body: OhMyUIMyComponent(label: 'Hello OhMyUI!'),
        ),
      ),
    );
    expect(find.text('Hello OhMyUI!'), findsOneWidget);
  });

  testWidgets('OhMyUIMyComponent renders secondary variant', (WidgetTester tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(
          body: OhMyUIMyComponent(
            label: 'Secondary',
            variant: OhMyUIMyComponentVariant.secondary,
          ),
        ),
      ),
    );
    expect(find.text('Secondary'), findsOneWidget);
  });
}
```

---

## Step 5 - Run analysis and tests

```bash
cd packages/ohmyui_flutter
flutter analyze
flutter test
```

Both commands must pass with no errors before opening a Pull Request.

---

## Step 6 - Commit and push

```bash
cd ../..
git checkout -b feat/my-component-flutter
git add .
git commit -m "feat(flutter): add MyComponent"
git push origin feat/my-component-flutter
```

Open a Pull Request targeting `dev` on GitHub.

---

## Checklist

- [ ] Widget file is inside its own folder `components/my_component/`
- [ ] Widget class name follows the pattern `OhMyUIMyComponent`
- [ ] Only `OhMyUITokens.*` constants are used - no hardcoded values
- [ ] Widget is exported from `lib/ohmyui_flutter.dart`
- [ ] At least one test exists per variant
- [ ] `flutter analyze` passes with no errors
- [ ] `flutter test` passes with no errors
- [ ] Commit message follows the convention `feat(flutter): add MyComponent`
- [ ] PR targets `dev`, not `main`

---

## Next steps

- [Submitting a PR](/guides/submitting-a-pr)
- [Adding a Token](/guides/adding-a-token)
