import 'package:flutter/material.dart';
import 'dart:async';

void main() => runApp(LittleStepsApp());

class LittleStepsApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Little Steps',
      theme: ThemeData(
        primarySwatch: Colors.purple,
        scaffoldBackgroundColor: Colors.grey[50],
      ),
      home: UserSelectionPage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

// Global state management
class AppState {
  static int coins = 50;
  static Map<String, int> spentCoins = {'YouTube': 0, 'Instagram': 0, 'Games': 0};
  static List<Function> listeners = [];

  static void addCoins(int amount) {
    coins += amount;
    notifyListeners();
  }

  static bool spendCoins(int amount, String app) {
    if (coins >= amount) {
      coins -= amount;
      spentCoins[app] = (spentCoins[app] ?? 0) + amount;
      notifyListeners();
      return true;
    }
    return false;
  }

  static void addListener(Function listener) {
    listeners.add(listener);
  }

  static void notifyListeners() {
    for (var listener in listeners) {
      listener();
    }
  }

  static int getTotalSpent() {
    return spentCoins.values.fold(0, (sum, val) => sum + val);
  }

  static String getMostSpentApp() {
    if (spentCoins.isEmpty || getTotalSpent() == 0) return 'None';
    return spentCoins.entries.reduce((a, b) => a.value > b.value ? a : b).key;
  }
}

class UserSelectionPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [Colors.purple[300]!, Colors.blue[300]!],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: SafeArea(
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text('Little Steps', style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold, color: Colors.white)),
                SizedBox(height: 20),
                Text('Choose Your Profile', style: TextStyle(fontSize: 20, color: Colors.white70)),
                SizedBox(height: 60),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    UserCard(title: 'Parent', icon: Icons.person, onTap: () {
                      Navigator.push(context, MaterialPageRoute(builder: (_) => ParentDashboard()));
                    }),
                    UserCard(title: 'Child', icon: Icons.child_care, onTap: () {
                      Navigator.push(context, MaterialPageRoute(builder: (_) => ChildDashboard()));
                    }),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class UserCard extends StatelessWidget {
  final String title;
  final IconData icon;
  final VoidCallback onTap;

  UserCard({required this.title, required this.icon, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 150,
        height: 180,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: [BoxShadow(color: Colors.black26, blurRadius: 10, offset: Offset(0, 4))],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 80, color: Colors.purple),
            SizedBox(height: 15),
            Text(title, style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
          ],
        ),
      ),
    );
  }
}

class ParentDashboard extends StatefulWidget {
  @override
  _ParentDashboardState createState() => _ParentDashboardState();
}

class _ParentDashboardState extends State<ParentDashboard> {
  @override
  void initState() {
    super.initState();
    AppState.addListener(() => setState(() {}));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Parent Dashboard'), elevation: 0),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            DashboardCard(
              title: 'Wallet Overview',
              child: Column(
                children: [
                  StatRow(label: 'Total Coins', value: '${AppState.coins}', color: Colors.green),
                  StatRow(label: 'Spent Coins', value: '${AppState.getTotalSpent()}', color: Colors.red),
                  StatRow(label: 'Most Spent On', value: AppState.getMostSpentApp(), color: Colors.orange),
                ],
              ),
            ),
            SizedBox(height: 20),
            DashboardCard(
              title: 'Add Coins',
              child: Column(
                children: [
                  CoinButton(amount: 10, onPressed: () => AppState.addCoins(10)),
                  CoinButton(amount: 20, onPressed: () => AppState.addCoins(20)),
                  CoinButton(amount: 50, onPressed: () => AppState.addCoins(50)),
                ],
              ),
            ),
            SizedBox(height: 20),
            DashboardCard(
              title: 'Spending Breakdown',
              child: Column(
                children: AppState.spentCoins.entries.map((e) {
                  return Padding(
                    padding: EdgeInsets.symmetric(vertical: 8),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(e.key, style: TextStyle(fontSize: 16)),
                        Text('${e.value} coins', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.purple)),
                      ],
                    ),
                  );
                }).toList(),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class ChildDashboard extends StatefulWidget {
  @override
  _ChildDashboardState createState() => _ChildDashboardState();
}

class _ChildDashboardState extends State<ChildDashboard> {
  @override
  void initState() {
    super.initState();
    AppState.addListener(() => setState(() {}));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Little Steps'),
        elevation: 0,
        actions: [
          Center(
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 16),
              child: Row(
                children: [
                  Icon(Icons.monetization_on, color: Colors.amber),
                  SizedBox(width: 5),
                  Text('${AppState.coins}', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                ],
              ),
            ),
          ),
        ],
      ),
      body: GridView.count(
        crossAxisCount: 2,
        padding: EdgeInsets.all(16),
        mainAxisSpacing: 16,
        crossAxisSpacing: 16,
        children: [
          MenuCard(title: 'Courses', icon: Icons.school, color: Colors.blue, onTap: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => CoursesPage()));
          }),
          MenuCard(title: 'Projects', icon: Icons.build, color: Colors.orange, onTap: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => ProjectsPage()));
          }),
          MenuCard(title: 'Skills', icon: Icons.lightbulb, color: Colors.green, onTap: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => SkillsPage()));
          }),
          MenuCard(title: 'Curiosity', icon: Icons.science, color: Colors.purple, onTap: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => CuriosityPage()));
          }),
          MenuCard(title: 'Discipline', icon: Icons.favorite, color: Colors.red, onTap: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => DisciplinePage()));
          }),
          MenuCard(title: 'Activities', icon: Icons.directions_run, color: Colors.teal, onTap: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => ActivitiesPage()));
          }),
          MenuCard(title: 'YouTube', icon: Icons.play_circle_fill, color: Colors.red[700]!, onTap: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => SocialAppPage(appName: 'YouTube', costPerMinute: 5, icon: Icons.play_circle_fill, color: Colors.red[700]!)));
          }),
          MenuCard(title: 'Instagram', icon: Icons.camera_alt, color: Colors.pink, onTap: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => SocialAppPage(appName: 'Instagram', costPerMinute: 4, icon: Icons.camera_alt, color: Colors.pink)));
          }),
          MenuCard(title: 'Games', icon: Icons.games, color: Colors.indigo, onTap: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => SocialAppPage(appName: 'Games', costPerMinute: 3, icon: Icons.games, color: Colors.indigo)));
          }),
        ],
      ),
    );
  }
}

class MenuCard extends StatelessWidget {
  final String title;
  final IconData icon;
  final Color color;
  final VoidCallback onTap;

  MenuCard({required this.title, required this.icon, required this.color, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 8, offset: Offset(0, 2))],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 50, color: color),
            SizedBox(height: 10),
            Text(title, style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          ],
        ),
      ),
    );
  }
}

class CoursesPage extends StatelessWidget {
  final courses = [
    {'title': 'ABC Learning', 'duration': '10 mins'},
    {'title': 'Basic Math', 'duration': '15 mins'},
    {'title': 'Colors & Shapes', 'duration': '12 mins'},
    {'title': 'Simple Science', 'duration': '20 mins'},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Courses')),
      body: ListView.builder(
        padding: EdgeInsets.all(16),
        itemCount: courses.length,
        itemBuilder: (ctx, i) => ListTile(
          leading: CircleAvatar(child: Icon(Icons.school), backgroundColor: Colors.blue),
          title: Text(courses[i]['title']!),
          subtitle: Text(courses[i]['duration']!),
          trailing: Icon(Icons.arrow_forward_ios),
        ),
      ),
    );
  }
}

class ProjectsPage extends StatelessWidget {
  final projects = [
    {'title': 'Paper Airplane', 'difficulty': 'Easy'},
    {'title': 'Draw a Robot', 'difficulty': 'Medium'},
    {'title': 'Build a Tower', 'difficulty': 'Easy'},
    {'title': 'Science Experiment', 'difficulty': 'Hard'},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Projects')),
      body: ListView.builder(
        padding: EdgeInsets.all(16),
        itemCount: projects.length,
        itemBuilder: (ctx, i) => ListTile(
          leading: CircleAvatar(child: Icon(Icons.build), backgroundColor: Colors.orange),
          title: Text(projects[i]['title']!),
          subtitle: Text(projects[i]['difficulty']!),
          trailing: Icon(Icons.arrow_forward_ios),
        ),
      ),
    );
  }
}

class SkillsPage extends StatelessWidget {
  final skills = [
    {'title': 'Tying Shoelaces', 'time': '5 mins'},
    {'title': 'Telling Time', 'time': '10 mins'},
    {'title': 'Basic Cooking', 'time': '15 mins'},
    {'title': 'Organizing Room', 'time': '8 mins'},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Skills')),
      body: ListView.builder(
        padding: EdgeInsets.all(16),
        itemCount: skills.length,
        itemBuilder: (ctx, i) => ListTile(
          leading: CircleAvatar(child: Icon(Icons.lightbulb), backgroundColor: Colors.green),
          title: Text(skills[i]['title']!),
          subtitle: Text(skills[i]['time']!),
          trailing: Icon(Icons.arrow_forward_ios),
        ),
      ),
    );
  }
}

class CuriosityPage extends StatelessWidget {
  final facts = [
    'Octopuses have three hearts!',
    'Honey never spoils - it lasts forever!',
    'A day on Venus is longer than its year!',
    'Butterflies taste with their feet!',
    'The Eiffel Tower grows in summer!',
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Curiosity - Science Facts')),
      body: ListView.builder(
        padding: EdgeInsets.all(16),
        itemCount: facts.length,
        itemBuilder: (ctx, i) => Card(
          margin: EdgeInsets.only(bottom: 16),
          child: Padding(
            padding: EdgeInsets.all(16),
            child: Row(
              children: [
                Icon(Icons.science, color: Colors.purple, size: 40),
                SizedBox(width: 16),
                Expanded(child: Text(facts[i], style: TextStyle(fontSize: 16))),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class DisciplinePage extends StatelessWidget {
  final habits = [
    {'title': 'Brush Teeth Twice Daily', 'icon': Icons.clean_hands},
    {'title': 'Make Your Bed', 'icon': Icons.bed},
    {'title': 'Say Please & Thank You', 'icon': Icons.favorite},
    {'title': 'Help with Chores', 'icon': Icons.cleaning_services},
    {'title': 'Be Kind to Others', 'icon': Icons.emoji_emotions},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Good Habits')),
      body: ListView.builder(
        padding: EdgeInsets.all(16),
        itemCount: habits.length,
        itemBuilder: (ctx, i) => ListTile(
          leading: CircleAvatar(child: Icon(habits[i]['icon'] as IconData), backgroundColor: Colors.red),
          title: Text(habits[i]['title'] as String),
          trailing: Icon(Icons.check_circle_outline),
        ),
      ),
    );
  }
}

class ActivitiesPage extends StatelessWidget {
  final activities = [
    {'title': 'Go for a Nature Walk', 'duration': '30 mins'},
    {'title': 'Read a Story Book', 'duration': '20 mins'},
    {'title': 'Play Board Games', 'duration': '45 mins'},
    {'title': 'Draw or Paint', 'duration': '25 mins'},
    {'title': 'Help Cook a Meal', 'duration': '40 mins'},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Offline Activities')),
      body: ListView.builder(
        padding: EdgeInsets.all(16),
        itemCount: activities.length,
        itemBuilder: (ctx, i) => ListTile(
          leading: CircleAvatar(child: Icon(Icons.directions_run), backgroundColor: Colors.teal),
          title: Text(activities[i]['title']!),
          subtitle: Text(activities[i]['duration']!),
          trailing: Icon(Icons.arrow_forward_ios),
        ),
      ),
    );
  }
}

class SocialAppPage extends StatefulWidget {
  final String appName;
  final int costPerMinute;
  final IconData icon;
  final Color color;

  SocialAppPage({required this.appName, required this.costPerMinute, required this.icon, required this.color});

  @override
  _SocialAppPageState createState() => _SocialAppPageState();
}

class _SocialAppPageState extends State<SocialAppPage> {
  bool isUsing = false;
  int secondsUsed = 0;
  Timer? timer;

  void startUsing() {
    if (AppState.coins < widget.costPerMinute) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Not enough coins! Ask your parent for more.'), backgroundColor: Colors.red),
      );
      return;
    }

    setState(() => isUsing = true);
    timer = Timer.periodic(Duration(seconds: 1), (t) {
      setState(() => secondsUsed++);
      if (secondsUsed % 60 == 0) {
        if (!AppState.spendCoins(widget.costPerMinute, widget.appName)) {
          stopUsing();
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Out of coins!'), backgroundColor: Colors.red),
          );
        }
      }
    });
  }

  void stopUsing() {
    timer?.cancel();
    setState(() {
      isUsing = false;
      secondsUsed = 0;
    });
  }

  @override
  void dispose() {
    timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.appName),
        backgroundColor: widget.color,
        actions: [
          Center(
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 16),
              child: Row(
                children: [
                  Icon(Icons.monetization_on, color: Colors.amber),
                  SizedBox(width: 5),
                  Text('${AppState.coins}', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                ],
              ),
            ),
          ),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(widget.icon, size: 120, color: widget.color),
            SizedBox(height: 30),
            Text(widget.appName, style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold)),
            SizedBox(height: 20),
            Text('Cost: ${widget.costPerMinute} coins/minute', style: TextStyle(fontSize: 18, color: Colors.grey[700])),
            SizedBox(height: 40),
            if (isUsing) ...[
              Text('Time Used: ${secondsUsed}s', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: stopUsing,
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.red,
                  padding: EdgeInsets.symmetric(horizontal: 40, vertical: 16),
                ),
                child: Text('Stop', style: TextStyle(fontSize: 20)),
              ),
            ] else
              ElevatedButton(
                onPressed: startUsing,
                style: ElevatedButton.styleFrom(
                  backgroundColor: widget.color,
                  padding: EdgeInsets.symmetric(horizontal: 40, vertical: 16),
                ),
                child: Text('Start Using', style: TextStyle(fontSize: 20)),
              ),
          ],
        ),
      ),
    );
  }
}

class DashboardCard extends StatelessWidget {
  final String title;
  final Widget child;

  DashboardCard({required this.title, required this.child});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 8, offset: Offset(0, 2))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
          SizedBox(height: 16),
          child,
        ],
      ),
    );
  }
}

class StatRow extends StatelessWidget {
  final String label;
  final String value;
  final Color color;

  StatRow({required this.label, required this.value, required this.color});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: TextStyle(fontSize: 16)),
          Text(value, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: color)),
        ],
      ),
    );
  }
}

class CoinButton extends StatelessWidget {
  final int amount;
  final VoidCallback onPressed;

  CoinButton({required this.amount, required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 8),
      child: ElevatedButton(
        onPressed: onPressed,
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.green,
          minimumSize: Size(double.infinity, 50),
        ),
        child: Text('Add $amount Coins', style: TextStyle(fontSize: 18)),
      ),
    );
  }
}